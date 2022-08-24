import { Grid } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Empezar, Historia, Mapa, Mision, Servicios, Vision } from "./"
import { React } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Scrollbar, Navigation } from "swiper";
import { Inicio } from "./Inicio";



export const Home = () => {

    return (
        <AuthLayout title="Home">
            <Grid container>
                <Swiper
                    direction={"vertical"}
                    speed={1200}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={{ releaseOnEdges: false }}
                    pagination={{
                        clickable: true
                    }}
                    scrollbar={{ draggable: true }}
                    modules={[Mousewheel, Pagination, Scrollbar]}
                    className="mySwiper"
                    followFinger={false}
                    touchReleaseOnEdges={true}
                    longSwipes={false}
                    parallax={true}
                >
                    <SwiperSlide><Inicio /></SwiperSlide>
                    <SwiperSlide><Historia /></SwiperSlide>
                    <SwiperSlide><Vision /></SwiperSlide>
                    <SwiperSlide><Mision /></SwiperSlide>
                    <SwiperSlide><Mapa /></SwiperSlide>
                    <SwiperSlide><Servicios /></SwiperSlide>
                    <SwiperSlide><Empezar /></SwiperSlide>
                </Swiper>
            </Grid>
        </AuthLayout >
    )
}
