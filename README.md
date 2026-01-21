# InsightAgent Backend

NestJS-based backend API for InsightAgent with AI-powered data analysis capabilities.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your actual credentials

# Run database migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

The API will be available at `http://localhost:3001/api`

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

## 🌍 Deployment

### Environment Variables
Configure these variables in your deployment platform:

- `DATABASE_URL` - PostgreSQL connection string
- `GROQ_API_KEY` - Groq API key for AI features
- `REDIS_URL` - Redis connection string for caching
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment mode (production/development)
- `ALLOWED_ORIGINS` - Comma-separated list of allowed frontend URLs

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Railway
1. Connect your GitHub repository
2. Add environment variables in Railway dashboard
3. Deploy automatically on push

### Deploy to Render
1. Create new Web Service
2. Connect repository
3. Build command: `npm install && npm run build`
4. Start command: `npm run start:prod`
5. Add environment variables

### Deploy to Heroku
```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Set environment variables
heroku config:set GROQ_API_KEY=your_key
heroku config:set ALLOWED_ORIGINS=https://your-frontend.com

# Deploy
git push heroku master
```

## 📝 API Documentation

### Base URL
- Development: `http://localhost:3001/api`
- Production: `https://your-domain.com/api`

### Endpoints
- `POST /api/agent/query` - Execute SQL query with AI assistance
- `POST /api/agent/upload` - Upload CSV data
- `GET /api/agent/insights` - Get data insights

## 🔒 Security Features

- ✅ CORS protection with configurable origins
- ✅ Request validation and sanitization
- ✅ Compression enabled
- ✅ Environment-based configuration
- ✅ SQL injection protection via Prisma

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL (via Prisma ORM)
- **Cache**: Redis
- **AI**: Groq SDK
- **Validation**: class-validator
- **Compression**: compression middleware
