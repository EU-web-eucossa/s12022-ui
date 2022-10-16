import { faStar as frStar } from '@fortawesome/free-regular-svg-icons';
import {
	faStar as fsStar,
	faStarHalf as fshStar
} from '@fortawesome/free-solid-svg-icons';

export default function starGenerator(rate: number) {
	const stars = [];
	if (rate === 1) {
		stars.push(fsStar);
		stars.push(frStar);
		stars.push(frStar);
		stars.push(frStar);
		stars.push(frStar);
	} else if (rate > 2 && rate < 3) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fshStar);
		stars.push(frStar);
		stars.push(frStar);
	} else if (rate === 2) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(frStar);
		stars.push(frStar);
		stars.push(frStar);
	} else if (rate === 3) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(frStar);
		stars.push(frStar);
	} else if (rate > 3 && rate < 4) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fshStar);
		stars.push(frStar);
	} else if (rate === 4) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(frStar);
	} else if (rate > 4 && rate < 5) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fshStar);	
	} else if (rate === 5) {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
	} else {
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fsStar);
		stars.push(fshStar);
	}

	return stars;
}
