let home_score = 0
let away_score = 0


function reset()
{
	home_score = 0;
	away_score = 0;
	document.getElementById("count-el").innerText = home_score;
	document.getElementById("count-away-el").innerText = away_score;
}

function plus1home()
{
	if (home_score >= 99)
		home_score = 0;
	home_score++;
	document.getElementById("count-el").innerText = home_score;

}

function plus2home()
{
	if (home_score >= 99)
		home_score = 0;
	home_score++;
	home_score++;
	document.getElementById("count-el").innerText = home_score;

}

function plus3home()
{
	if (home_score >= 99)
		home_score = 0;
	home_score++;
	home_score++;
	home_score++;
	document.getElementById("count-el").innerText = home_score;

}


function plus1away()
{
	if (away_score >= 99)
		away_score = 0;
	away_score++;
	document.getElementById("count-away-el").innerText = away_score;

}

function plus2away()
{
	if (away_score >= 99)
		away_score = 0;
	away_score++;
	away_score++;
	document.getElementById("count-away-el").innerText = away_score;


}

function plus3away()
{
	if (away_score >= 99)
		away_score = 0;
	away_score++;
	away_score++;
	away_score++;
	document.getElementById("count-away-el").innerText = away_score;


}