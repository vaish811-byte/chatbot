import openai;
openai.api_key="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"
def chat_with_gpt(prompt):
    response=openai.ChatCompletion.create(model="gpt-3.5-turbo",message=[{"role":"user","content":prompt}])
    return response.choices[0].content.strip()
if __name__=="__main__":
    while True:
        user=input("you")
        if user.lower() in ["quit","exit","bye"]:
            break;
        response=chat_with_gpt(user)
        print("chatbot:",response)
