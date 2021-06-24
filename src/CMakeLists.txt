cmake_minimum_required(VERSION 3.17)

find_package(OpenGL REQUIRED)
include_directories(${OPENGL_INCLUDE_DIR})
MESSAGE(STATUS "opengl lib:" ${OPENGL_LIBRARY})
MESSAGE(STATUS "opengl inc:" ${OPENGL_INCLUDE_DIR})

find_package(GLFW3 REQUIRED)
message(STATUS "Found GLFW3 in ${GLFW3_INCLUDE_DIR}")
include_directories(${GLFW_INCLUDE_DIRS})

include_directories(${LearnOpenGL_SOURCE_DIR}/includes)#将当前工程路径下的includes头文件包含进来
link_directories(${LearnOpenGL_SOURCE_DIR/lib})

add_definitions("-DCPP_SRC_DIR=\"${CMAKE_CURRENT_SOURCE_DIR}/\"")

#将当前目录中的源文件名称赋值给变量SRC_LIST
AUX_SOURCE_DIRECTORY(. SRC_LIST)

add_executable(LearnOpenGL ${SRC_LIST})

target_link_libraries(LearnOpenGL ${GLEW_LIBRARY} glfw )
target_link_libraries(LearnOpenGL "-framework OpenGL")