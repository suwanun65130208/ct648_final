import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การพัฒนาระบบสกาดาร่วมกับดิจิทัลทวินเพื่อเพิ่มประสิทธิภาพการทำงานของปลั๊กไฟในระบบอัตโนมัติ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดบทที่ 1 : บทนำ,ความเป็นมาและความสำคัญ = Success / บทที่ 2 : ทฤษฎีที่เกี่ยวข้องและเอกสารอ้างอิง = Success / บทที่ 3 : วิธีการดำเนินงาน,FlowChart = Success / บทที่ 4 : ผลการดำเนินงาน = Processing  / บทที่ 5 : สรุปผลการดำเนินการ = Processing
          </Typography>
        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
