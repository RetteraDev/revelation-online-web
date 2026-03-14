# Local developement
Before commit
```bash
pip install pre-commit
pre-commit install
```

# Running
Hot Reload is also worked
```bash
docker compose -f "docker-compose.dev.yaml" --env-file dev.env up  --build
```

# Production
```bash
docker compose -f "docker-compose.prod.yaml" up --build
```