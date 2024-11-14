#include<stdio.h>
int main()
{
    int a[100];
    for (int i=0;i<5;i++)
    {
        scanf("%d",&a[i]);
    
    }
    for(int i=0;i<5;i++)
    {
        for(int j=i+1;j<5;j++){
            if(a[j]<a[i])
            {
                    int temp=a[j];
                    a[j]=a[i];
                    a[i]=temp;
            }
        }
    }
    
    for(int i=0;i<5;i++)
    {
        printf("%d",a[i]);
    }
}