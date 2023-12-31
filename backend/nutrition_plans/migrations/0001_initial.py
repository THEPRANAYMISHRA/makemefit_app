# Generated by Django 4.2.4 on 2023-09-02 09:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('workout_plans', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NutritionPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan_name', models.CharField(max_length=100)),
                ('goal', models.CharField(choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Balanced Diet', 'Balanced Diet')], max_length=100)),
                ('duration_weeks', models.PositiveIntegerField()),
                ('guidelines', models.TextField()),
                ('workout_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workout_plans.workoutplan')),
            ],
        ),
    ]
