# Generated by Django 5.0.7 on 2024-08-08 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0017_alter_book_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='isbn',
            field=models.CharField(max_length=250, unique=True),
        ),
    ]