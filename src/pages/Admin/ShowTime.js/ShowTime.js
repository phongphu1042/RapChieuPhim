import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, DatePicker, Cascader, InputNumber } from 'antd';
import moment from 'moment';
import { QLRapService } from '../../../services/QuanLyRapService';
import { useFormik } from 'formik';
import { QLDatVeService } from '../../../services/QuanLyDatVeService';

export default function ShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (values) => {
            console.log('values', values);
            try{
                const result = await QLDatVeService.taoLichChieu(values);
                alert(result.data.content)
                
            }
            catch(err){
                console.log('err',err.response?.data);
            }
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })
    // console.log(state.heThongRapChieu);
    useEffect(async () => {
        try {
            let result = await QLRapService.layThongTinHeThongRap();
            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
            
            
        }
        catch (err) {

        }
        
    }, [])

    const range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    const disabledDateTime = () => {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }


    const handleChangeHeThongRap = async (values) => {
        console.log('maHeThongRap', values);
        //t??? h??? th???ng r???p call api l???y th??ng tin r???p
        try {
            let result = await QLRapService.layThongTinCumRap(values);
            //g??n gi?? tr??? c???m r???p v??o state.c???mRap
            setState({
                ...state,
                cumRapChieu: result.data.content
            })
        }
        catch (error) {
            console.log('error', error.response?.data);
        }
    }

    const handleChangeCumRap = (values) => {
        formik.setFieldValue('maRap', values)
    }

    const handleChangeDatePicker = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
        console.log('DatePicker', moment(values).format('DD/MM/YYYY hh:mm:ss'));
    }

    const handleChangeInputNumber = (values) => {
        formik.setFieldValue('giaVe',values);
    }

    const convertSelectHTR = () => {
        // state.heThongRapChieu?.map((htr,index)=>{
        //     return {label:htr.tenHeThongRap, value:htr.tenHeThongRap}
        // })

        return state.heThongRapChieu?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
        })

    }
    console.log('tenPhim',props.match.params.tenPhim);
    let film={}
    if(localStorage.getItem('filmParams')){
        film = JSON.parse(localStorage.getItem('filmParams'))
    }
    return (
        <div>
            <Form onSubmitCapture={formik.handleSubmit}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className="flex" >
                
                <img width={200} src={film.hinhAnh} alt="..." onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/id/1004/200/300"}} />
                <h3 className="text-2xl text-center" style={{margin:'auto'}}>T???o l???ch chi???u phim - {props.match.params.tenPhim} </h3>
                </div>
                <Form.Item label="H??? th???ng r???p">
                    <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Ch???n h??? th???ng r???p" />
                </Form.Item>

                <Form.Item label="C???m r???p ">
                    <Select options={state.cumRapChieu?.map((cumRap, index) => ({
                        label: cumRap.tenCumRap, value: cumRap.maCumRap
                    }))} onChange={handleChangeCumRap} placeholder="Ch???n c???m r???p" />
                </Form.Item>

                <Form.Item label="Ng??y chi???u gi??? chi???u ">
                    <DatePicker
                        format="DD/MM/YYYY hh:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'hh:mm:ss') }}
                        onChange={handleChangeDatePicker}
                    />
                </Form.Item>

                <Form.Item label="Gi?? v?? ">
                    <InputNumber min={75000} max={150000} onChange={handleChangeInputNumber} />
                </Form.Item>
                <Form.Item label="Ch???c n??ng">
                    <Button htmlType="submit">T???o l???ch chi???u </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
