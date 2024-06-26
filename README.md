# Furniture Shop React + Next

## 개발 환경
- **Node.js** `v20.9.0`(LTS)
- **PackageManager** `npm`

## 코드 규칙

## 컴포넌트 구조 및 내보내기 규칙
본 프로젝트는 React와 Next.js를 사용하여 개발되며, 컴포넌트 구조와 내보내기 방식에 대해 다음과 같은 규칙을 따릅니다.

### 페이지 컴포넌트
- 내보내기: 페이지 컴포넌트는 default export를 사용하여 내보냅니다.
- 이유: Next.js는 파일 기반 라우팅을 사용하며, pages 디렉토리 내의 각 파일은 라우트와 직접 연결됩니다. 따라서, 각 페이지 파일은 하나의 주요 컴포넌트만을 내보내야 하며, 이는 default export를 사용함으로써 명확히 됩니다.

### 일반 컴포넌트와 훅
- 내보내기: 일반 컴포넌트와 훅은 named export를 사용하여 내보냅니다.
- 이유 : 일반 컴포넌트는 하나의 파일에 하나의 컴포넌트만을 담고 있어야 하며, 동일한 레벨에서 index.ts 파일을 통해 re-export해야 합니다.