### 2024 프로젝트
+ 동두천시 메인 레이아웃
    + 6월
        + [미디어센터](https://shallow960.github.io/publishing/2024/ddc_media/site/media/main.html)
        + [미디어센터](https://shallow960.github.io/publishing/2024/D.html)
            <details>
            <summary>작업과정</summary>

            ```html

            ```
            </details>

+ 충북도청 메인 레이아웃
    + 4월
        + [스마트쉼센터](https://shallow960.github.io/publishing/2024/chungbuk2024/site/iapc2024/main.html)
            <details>
            <summary>작업과정</summary>
            
            ```html

            ```
            </details>

    + 3월
        + [어린이도청](https://shallow960.github.io/publishing/2024/chungbuk2024/site/child2024/main.html)
            <details>
            <summary>작업과정</summary>

            ```html
            + 작업시 어려웠던점
                - 작업시 가장 어려웠던 점은 기술구현 문제였습니다. 
                o첫번쨰는 메인 비주얼 부분에 원형 선과 원밖으로 나온 아이의 이미지 그리고 움직이는 원 
                이 세가지의 index를 조정하는게 첫 어려움이였고
                o두번째는 메인 비주얼 부분에 slick 박스 틀 부분에 애니메이션 효과의 어려움이 있었고
                o세번째는 최하단 슬라이드에 디자이너분이 요청하신 효과중에 슬라이드가 넘어가는 도중에 
                마우스 over시 즉시 멈춰야 하는 효과였습니다.

            + 해결방법
                -첫번째 문제는 슬릭 이미지 index와 비주얼 박스 index svg라인 index 3개의 인덱스가 
                서로 맞지 않아서 문제였던 부분을 비주얼박스 밖으로 나온 아이 부분을 따로 이미지를 
                분리해서 index조정을 작업했습니다.
                -두번째 문제는 mask-image를 사용해서 안쪽 이미지는 가만히 두고 외부 틀만 이동을 
                시키는 방식으로 작업했고 이 과정에서 mask-position에 애니메이션 부분이 부자연스럽다는 
                피드백을 받았고 많은 효과와 방법을 찾아본 결과 스크립트로 구현이 가능할꺼 같아서 
                mask-position의 X축의 값은 0px > 2px > 1px 0px로 반복되고 
                Y축은 0px > 4px > 6px > 0px 영역만큼 이동한다. 끊김없이 계속 움직이기에 단순 
                css 구현보다는 더욱 자연스럽게 구현이 가능했다.
                -세번째 문제는 slick자체만으로는 구현이 불가능한 효과였고 회사 규정상 swiper은 
                사용할수 없어서 디자이너와 협의를 계속해서 나온 결론은 슬릭 자체기능으로 아이템 
                over시 자리를 찾은후 멈추게 하고 end > first 될때 slick speed를 빠르게 작업과 
                arrows를 조작시에도 slick speed를 변화시키는 것으로 협의점을 찾고 
                스크립트로 구현했다.
            + 작업후 느낀점
                -처음에 사소한것들은 디자이너와 협의하지않고 진행했을때 그 부분이 작업자에게는 
                사소한 부분이였어도 다른 작업자들 에게는 사소한게 아니라는 것을 느꼈다. 이러한 
                문제로 인해서 작업기한이 늘어나서 다른 작업할 부분이 조금씩 밀리는 현상이 있었다.
                사소하다고 느끼는것도 왠만하면 디자이너, PM과 상의해서 작업해야 한다는 점을 
                다시한번 느꼈습니다.
            ```
            </details>
    
+ 철원군청 메인 레이아웃
    + 1월
        + [문화관광](https://shallow960.github.io/publishing/2024/cheorwon/site/tour2024/main.html)
            <details>
            <summary>작업과정</summary>
            
            ```html

            ```
            </details>

***
### 2023 프로젝트
+ 음성군청 메인 레이아웃
    + 11월
        + [팩토리투어](https://shallow960.github.io/publishing/2023/eumseong/site/factory/main.html)
            <details>
            <summary>작업과정</summary>
            
            ```html

            ```
            </details>

    + 12월
        + [사진DB](https://shallow960.github.io/publishing/2023/eumseong/site/photo/main.html)
            <details>
            <summary>작업과정</summary>
            
            ```html

            ```
            </details>
    
+ 충북도청 메인 레이아웃
    + 5월
        + [브랜드사이트](https://shallow960.github.io/publishing/2023/chungbuk2023/site/brand/main.html)
            <details>
            <summary>작업과정</summary>
            
            ```html

            ```
            </details>
            
***
### scropt 기술구현
+ 슬롯머신 효과 
  + [슬롯머신](https://shallow960.github.io/publishing/script기술구현/html/슬롯머신.html)

