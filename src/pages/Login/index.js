import React from "react";

import { Img, Text, List } from "components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex md:flex-col sm:flex-col flex-row font-dmsans gap-[343px] md:gap-[40px] sm:gap-[40px] items-center mx-[auto] pb-[212px] sm:pr-[20px] pr-[212px] md:pr-[40px] w-[100%]">
        <div className="h-[1112px] md:h-[1347px] sm:h-[1347px] mb-[310px] relative md:w-[100%] sm:w-[100%] w-[30%]">
          <div className="md:h-[1037px] sm:h-[1037px] h-[1112px] m-[auto] w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[49px] sm:px-[20px] md:px-[40px] w-[87%]"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-col gap-[108px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[169px] mt-[197px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] sm:w-[100%] w-[26%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[56px] w-[auto]"
                    alt="arrowdown"
                  />
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                    <Text
                      className="text-center text-white_A700 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Log in
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="h-[21px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                    <Img
                      src="images/img_line.svg"
                      className="absolute h-[1px] inset-[0] justify-center m-[auto] w-[auto]"
                      alt="Line"
                    />
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[7%]">
                      <Text
                        className="text-center text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Or
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[30px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[33%]">
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Email Address
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-start justify-end p-[13px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[43%]">
                        <Text
                          className="not-italic text-left text-white_A700_99 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          example@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[124px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-start justify-between w-[auto]">
                      <div className="border border-solid border-white_A700_87 h-[15px] mt-[2px] rounded-radius2 w-[15px]"></div>
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Remember me
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[auto]">
                      <Text
                        className="not-italic text-indigo_A200 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Reset Password?
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end mt-[40px] p-[13px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_button.svg')" }}
                  >
                    <div className="flex flex-col items-center justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[15%]">
                      <Text
                        className="text-center text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Log in
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[85%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      <span className="text-white_A700 text-[16px] font-dmsans font-medium">
                        Don’t have account yet?
                      </span>
                      <span className="text-white_A700 text-[16px] font-dmsans font-medium">
                        {" "}
                      </span>
                      <span className="text-indigo_A200 text-[16px] font-dmsans font-medium">
                        New Account
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[9%] flex flex-col gap-[288px] md:gap-[40px] sm:gap-[40px] justify-start right-[0] w-[91%]">
              <div className="flex flex-col gap-[9px] items-start justify-start mr-[121px] md:w-[100%] sm:w-[100%] w-[75%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Password
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-start justify-start p-[15px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group2.svg')" }}
                >
                  <Img
                    src="images/img_menu.svg"
                    className="h-[7px] my-[6px] w-[auto]"
                    alt="menu"
                  />
                </div>
              </div>
              <Img
                src="images/img_hide.svg"
                className="h-[16px] md:ml-[0] sm:ml-[0] ml-[451px] w-[17px]"
                alt="Hide"
              />
            </div>
          </div>
          <List
            className="absolute sm:flex-col flex-row gap-[22px] grid grid-cols-2 left-[10%] top-[36%] w-[68%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[161px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-end p-[12px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mr-[27px] mt-[4px] md:w-[100%] sm:w-[100%] w-[40%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Google
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_google.svg"
                className="h-[26px] w-[auto]"
                alt="google One"
              />
            </div>
            <div className="flex flex-col gap-[161px] md:gap-[40px] sm:gap-[40px] justify-start w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-end p-[14px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mr-[17px] md:w-[100%] sm:w-[100%] w-[57%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Facebook
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_facebook.svg"
                className="h-[26px] md:ml-[0] sm:ml-[0] ml-[134px] w-[auto]"
                alt="facebook One"
              />
            </div>
          </List>
        </div>
        <Img
          src="images/img_illustration.svg"
          className="h-[885px] w-[auto]"
          alt="Illustration"
        />
      </div>
    </>
  );
};

export default LoginPage;
