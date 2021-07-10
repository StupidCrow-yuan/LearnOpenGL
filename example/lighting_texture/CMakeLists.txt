cmake_minimum_required(VERSION 3.17)

project(lighting_texture)

find_package(OpenGL REQUIRED)
include_directories(${OPENGL_INCLUDE_DIR})
MESSAGE(STATUS "opengl lib:" ${OPENGL_LIBRARY})
MESSAGE(STATUS "opengl inc:" ${OPENGL_INCLUDE_DIR})

find_package(GLFW3 REQUIRED)
message(STATUS "Found GLFW3 in ${GLFW3_INCLUDE_DIR}")
include_directories(${GLFW_INCLUDE_DIRS})

message(STATUS "    include path: ${CMAKE_CURRENT_SOURCE_DIR}")
message(STATUS "    include path: ${lighting_texture_SOURCE_DIR}/../../src")
include_directories(${lighting_texture_SOURCE_DIR}/../../includes)#将当前工程路径下的includes头文件包含进来
link_directories(${lighting_texture_SOURCE_DIR}/../../lib)

add_definitions("-DCPP_SRC_DIR=\"${CMAKE_CURRENT_SOURCE_DIR}/\"")

include_directories(${lighting_texture_SOURCE_DIR}/../../src)
#将当前目录中的源文件名称赋值给变量SRC_LIST
AUX_SOURCE_DIRECTORY(. LIGHTING_LIST)
message(STATUS "LIST: ${LIGHTING_LIST}")

add_executable(lighting_texture ${LIGHTING_LIST})

target_link_libraries(lighting_texture ${GLEW_LIBRARY} glfw )
target_link_libraries(lighting_texture "-framework OpenGL")