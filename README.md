## 日記 + チャットアプリ


ログインしてユーザー認証し、対象ユーザーの日記が保存できる。フォロワーがつけられ、例えばAさんの日記をフォロワーのBさんCさんも見れるようにする。そこからチャットを始められるようにする。

## 開発環境

- Amplify：フロント
    - React
- App Sync：チャット
- S3 + Cloudfront：静的コンテンツ
- Cognito：認証（電話、メール、ID）
- API Gateway + Lambda：バックエンド
    - NodeJS + Express
- Aurora Serverless：日記DB
    - MySQL
- DynamoDB：チャットDB