#version 330 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

//uniform sampler2D ourTexture;
uniform vec3 objectColor;
uniform vec3 lightColor;

void main()
{
    color = vec4(1.0);
}