import React from 'react'
import { Image } from "antd";
import { useImage } from "../components/Image";
import { Spin } from "antd";

function DetailPhoto({item}) {
  const { loading, image } = useImage(item);

  if (loading) {
    return <Spin />;
  }

  return (
    <Image src={image}/> 
  )
}

export default DetailPhoto