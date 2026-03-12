Приветствую тебя, рад, что ты решил(-а) поднять свой собственный сервер
На текущем этапе я предполагаю, что у тебя уже есть Bare Metal хостинг

Подключаемся к нему по SSH

## Настройка Bare Metal ##

1) Установка Docker
Сначала проверим его наличие
```bash
docker --version
docker compose version
```

-- Настройка прав под Docker
sudo usermod -aG docker $USER

2) SSL
Благодаря Caddy процесс выпуска и автообновление в коробке
Нужно лишь открыть порты для настройки. В частности вот https://cloud.ru/docs/security-groups/ug/topics/use-cases__web-server
