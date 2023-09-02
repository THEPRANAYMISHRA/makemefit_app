# Generated by Django 4.2.4 on 2023-09-02 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TrainerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=10)),
                ('specialization', models.CharField(max_length=100)),
                ('experience', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=254)),
                ('contact_number', models.CharField(max_length=20)),
            ],
        ),
    ]