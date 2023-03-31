import httpService from "./http.service";

const memberEndpoint = "members/";

const memberService = {
	get: async () => {
    const { data } = await httpService.get(memberEndpoint);
    return data;
  }
}

export default memberService;
