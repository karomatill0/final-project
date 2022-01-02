import React from "react";
import ReactApexChart from "react-apexcharts";
import dashboard from "../../assets/icon/dashboard (1).png";
import basket from "../../assets/icon/shopping-cart (1).png";
import icon from "../../assets/icon/icon1.png";
import icona from "../../assets/icon/icon2.png";
import iconb from "../../assets/icon/icon3.png";
import iconc from "../../assets/icon/icon4.png";
import image from "../../assets/image/image.png";
import icond from "../../assets/icon/icon5.png";
import {
  Apex,
  ApexCard,
  ApexCard1,
  ApexCard2,
  ApexCard3,
  ApexCard4,
  ApexWrapper,
  Asosi,
  Button,
  Card,
  CardWrapper,
  Container,
  Df,
  Dollar,
  Img,
  Img1,
  ImgA,
  ImgDiv,
  Korzinka,
  RightSite,
  RightSite1,
  Td,
  Tdte,
  Text,
  Text1,
  Text2,
  Text3,
  Top,
} from "./styles";
import { useDispatch,useSelector } from "react-redux";
import { open } from "../../redux/modules/navbar/addProductAction";
import MainPage from "../mainPage";
import MainPageA from "../addProductA";

function Dashboard() {
  const options = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [
          "01jan",
          "02jan",
          "03jan",
          "04jan",
          "05jan",
          "06jan",
          "07jan",
        ],
      },
    },
    options1: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["Sun", "Mun", "Tuh", "Wed", "Thu", "Fri"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [120, 10, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    series1: [
      {
        name: "series-1",
        data: [20, 50, 20, 65, 30, 75],
      },
    ],
  };
  const option = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [70, 20, 10],
  };
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  return (
    <>
      <RightSite>
        <Top>
          <input type="search" placeholder="search product" />
          <div>
            <div style={{width:`25px`,margin:`0px 20px 0px 0px`,}} >
            <img style={{width:`25px`,cursor:`pointer`, }} src={icond} alt="" />
            </div>
            <img src={image} alt="" />
            <p>Karomatillo Khaitboev</p>
          </div>
        </Top>
        <RightSite1>
          <Df>
            <h2>Dashboard</h2>
            {mode ? "" : <MainPageA/> } <br />
            <Button onClick={() => dispatch(open())} mode={mode} >
              <Img src={basket} alt="" />
            </Button>
          </Df>
          <CardWrapper>
            <Card>
              <ImgDiv>
                <Img src={icona} alt="" />
              </ImgDiv>
              <Dollar>$25,255.00</Dollar>
              <Text>
                Today Sales <Text1>+35%</Text1>
              </Text>
            </Card>
            <Card>
              <ImgDiv>
                <Img src={icon} alt="" />
              </ImgDiv>
              <Dollar>$1255.00</Dollar>
              <Text>
                Today Expenses <Text2>+10%</Text2>
              </Text>
            </Card>
            <Card>
              <ImgDiv>
                <Img src={iconb} alt="" />
              </ImgDiv>
              <Dollar>5355</Dollar>
              <Text>
                Today Visitors <Text3>+15%</Text3>
              </Text>
            </Card>
            <Card>
              <ImgDiv>
                <Img src={iconc} alt="" />
              </ImgDiv>
              <Dollar>500</Dollar>
              <Text>
                Today Orders <Text1>17%</Text1>
              </Text>
            </Card>
          </CardWrapper>
          <Apex>
            <ApexCard1>
              <ReactApexChart
                options={options.options}
                series={options.series}
                type="bar"
                width={630}
                height={200}
              />
            </ApexCard1>
            <ApexCard2>
              <ReactApexChart
                options={options.options1}
                series={options.series1}
                type="area"
                width={387}
                height={200}
              />
            </ApexCard2>
          </Apex>
          <ApexWrapper>
            <ApexCard3>
              <table>
                <tr>
                  <Tdte>#2236546791</Tdte>
                  <Tdte>
                    <Img1 src="https://stockx.imgix.net/Nike-Free-Run-2-Doernbecher-2012-Product.jpg" alt="" />{" "}
                  </Tdte>
                  <Td>Nike</Td>
                  <Tdte>31/03/2021</Tdte>
                  <Tdte>$250.00</Tdte>
                  <Tdte>
                    <Korzinka>
                      <Img src={basket}></Img>
                    </Korzinka>
                  </Tdte>
                </tr>
                <tr>
                  <Tdte>#2875834292</Tdte>
                  <Tdte>
                    <Img1 src="https://doshop.kz/images/product/5449000000439.png" alt="" />{" "}
                  </Tdte>
                  <Td>Coca-Cola</Td>
                  <Tdte>23/07/2021</Tdte>
                  <Tdte>$1</Tdte>
                  <Tdte>
                    <Korzinka>
                      <Img src={basket}></Img>
                    </Korzinka>
                  </Tdte>
                </tr>
                <tr>
                  <Tdte>#3465839302</Tdte>
                  <Tdte>
                    <Img1 src="https://static-sl.insales.ru/images/products/1/3306/310734058/%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4_NESTLE_Decoration_%D0%93%D0%BE%D1%80%D1%8C%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D0%BC%D0%BD%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_85_%D0%B3_%D0%A0%D0%9E%D0%A1%D0%A1%D0%98%D0%AF.jpg" alt="" />{" "}
                  </Tdte>
                  <Td>Nestle</Td>
                  <Tdte>15/01/2021</Tdte>
                  <Tdte>$0.9</Tdte>
                  <Tdte>
                    <Korzinka>
                      <Img src={basket}></Img>
                    </Korzinka>
                  </Tdte>
                </tr>
                <tr>
                  <Tdte>#3457430223</Tdte>
                  <Tdte>
                    <Img1 src="https://31.img.avito.st/image/1/whrZ8La_bvOvXvz70f_dbS1TaPlnk2FhZVNs9WFVbPNtFQ" alt="" />{" "}
                  </Tdte>
                  <Td>Sneakers</Td>
                  <Tdte>9/010/2021</Tdte>
                  <Tdte>$0.3</Tdte>
                  <Tdte>
                    <Korzinka>
                      <Img src={basket}></Img>
                    </Korzinka>
                  </Tdte>
                </tr>
              </table>
            </ApexCard3>
            <ApexCard4>
              <ReactApexChart
                options={option.options}
                series={option.series}
                type="donut"
                width={400}
                height={300}
              />
            </ApexCard4>
          </ApexWrapper>
        </RightSite1>
      </RightSite>
    </>
  );
}

export default Dashboard;
