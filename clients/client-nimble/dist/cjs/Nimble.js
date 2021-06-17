"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nimble = void 0;
const NimbleClient_1 = require("./NimbleClient");
const AcceptEulasCommand_1 = require("./commands/AcceptEulasCommand");
const CreateLaunchProfileCommand_1 = require("./commands/CreateLaunchProfileCommand");
const CreateStreamingImageCommand_1 = require("./commands/CreateStreamingImageCommand");
const CreateStreamingSessionCommand_1 = require("./commands/CreateStreamingSessionCommand");
const CreateStreamingSessionStreamCommand_1 = require("./commands/CreateStreamingSessionStreamCommand");
const CreateStudioCommand_1 = require("./commands/CreateStudioCommand");
const CreateStudioComponentCommand_1 = require("./commands/CreateStudioComponentCommand");
const DeleteLaunchProfileCommand_1 = require("./commands/DeleteLaunchProfileCommand");
const DeleteLaunchProfileMemberCommand_1 = require("./commands/DeleteLaunchProfileMemberCommand");
const DeleteStreamingImageCommand_1 = require("./commands/DeleteStreamingImageCommand");
const DeleteStreamingSessionCommand_1 = require("./commands/DeleteStreamingSessionCommand");
const DeleteStudioCommand_1 = require("./commands/DeleteStudioCommand");
const DeleteStudioComponentCommand_1 = require("./commands/DeleteStudioComponentCommand");
const DeleteStudioMemberCommand_1 = require("./commands/DeleteStudioMemberCommand");
const GetEulaCommand_1 = require("./commands/GetEulaCommand");
const GetLaunchProfileCommand_1 = require("./commands/GetLaunchProfileCommand");
const GetLaunchProfileDetailsCommand_1 = require("./commands/GetLaunchProfileDetailsCommand");
const GetLaunchProfileInitializationCommand_1 = require("./commands/GetLaunchProfileInitializationCommand");
const GetLaunchProfileMemberCommand_1 = require("./commands/GetLaunchProfileMemberCommand");
const GetStreamingImageCommand_1 = require("./commands/GetStreamingImageCommand");
const GetStreamingSessionCommand_1 = require("./commands/GetStreamingSessionCommand");
const GetStreamingSessionStreamCommand_1 = require("./commands/GetStreamingSessionStreamCommand");
const GetStudioCommand_1 = require("./commands/GetStudioCommand");
const GetStudioComponentCommand_1 = require("./commands/GetStudioComponentCommand");
const GetStudioMemberCommand_1 = require("./commands/GetStudioMemberCommand");
const ListEulaAcceptancesCommand_1 = require("./commands/ListEulaAcceptancesCommand");
const ListEulasCommand_1 = require("./commands/ListEulasCommand");
const ListLaunchProfileMembersCommand_1 = require("./commands/ListLaunchProfileMembersCommand");
const ListLaunchProfilesCommand_1 = require("./commands/ListLaunchProfilesCommand");
const ListStreamingImagesCommand_1 = require("./commands/ListStreamingImagesCommand");
const ListStreamingSessionsCommand_1 = require("./commands/ListStreamingSessionsCommand");
const ListStudioComponentsCommand_1 = require("./commands/ListStudioComponentsCommand");
const ListStudioMembersCommand_1 = require("./commands/ListStudioMembersCommand");
const ListStudiosCommand_1 = require("./commands/ListStudiosCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutLaunchProfileMembersCommand_1 = require("./commands/PutLaunchProfileMembersCommand");
const PutStudioMembersCommand_1 = require("./commands/PutStudioMembersCommand");
const StartStudioSSOConfigurationRepairCommand_1 = require("./commands/StartStudioSSOConfigurationRepairCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLaunchProfileCommand_1 = require("./commands/UpdateLaunchProfileCommand");
const UpdateLaunchProfileMemberCommand_1 = require("./commands/UpdateLaunchProfileMemberCommand");
const UpdateStreamingImageCommand_1 = require("./commands/UpdateStreamingImageCommand");
const UpdateStudioCommand_1 = require("./commands/UpdateStudioCommand");
const UpdateStudioComponentCommand_1 = require("./commands/UpdateStudioComponentCommand");
class Nimble extends NimbleClient_1.NimbleClient {
    acceptEulas(args, optionsOrCb, cb) {
        const command = new AcceptEulasCommand_1.AcceptEulasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLaunchProfile(args, optionsOrCb, cb) {
        const command = new CreateLaunchProfileCommand_1.CreateLaunchProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStreamingImage(args, optionsOrCb, cb) {
        const command = new CreateStreamingImageCommand_1.CreateStreamingImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStreamingSession(args, optionsOrCb, cb) {
        const command = new CreateStreamingSessionCommand_1.CreateStreamingSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStreamingSessionStream(args, optionsOrCb, cb) {
        const command = new CreateStreamingSessionStreamCommand_1.CreateStreamingSessionStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStudio(args, optionsOrCb, cb) {
        const command = new CreateStudioCommand_1.CreateStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStudioComponent(args, optionsOrCb, cb) {
        const command = new CreateStudioComponentCommand_1.CreateStudioComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLaunchProfile(args, optionsOrCb, cb) {
        const command = new DeleteLaunchProfileCommand_1.DeleteLaunchProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteLaunchProfileMember(args, optionsOrCb, cb) {
        const command = new DeleteLaunchProfileMemberCommand_1.DeleteLaunchProfileMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStreamingImage(args, optionsOrCb, cb) {
        const command = new DeleteStreamingImageCommand_1.DeleteStreamingImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStreamingSession(args, optionsOrCb, cb) {
        const command = new DeleteStreamingSessionCommand_1.DeleteStreamingSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStudio(args, optionsOrCb, cb) {
        const command = new DeleteStudioCommand_1.DeleteStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStudioComponent(args, optionsOrCb, cb) {
        const command = new DeleteStudioComponentCommand_1.DeleteStudioComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStudioMember(args, optionsOrCb, cb) {
        const command = new DeleteStudioMemberCommand_1.DeleteStudioMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getEula(args, optionsOrCb, cb) {
        const command = new GetEulaCommand_1.GetEulaCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLaunchProfile(args, optionsOrCb, cb) {
        const command = new GetLaunchProfileCommand_1.GetLaunchProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLaunchProfileDetails(args, optionsOrCb, cb) {
        const command = new GetLaunchProfileDetailsCommand_1.GetLaunchProfileDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLaunchProfileInitialization(args, optionsOrCb, cb) {
        const command = new GetLaunchProfileInitializationCommand_1.GetLaunchProfileInitializationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getLaunchProfileMember(args, optionsOrCb, cb) {
        const command = new GetLaunchProfileMemberCommand_1.GetLaunchProfileMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStreamingImage(args, optionsOrCb, cb) {
        const command = new GetStreamingImageCommand_1.GetStreamingImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStreamingSession(args, optionsOrCb, cb) {
        const command = new GetStreamingSessionCommand_1.GetStreamingSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStreamingSessionStream(args, optionsOrCb, cb) {
        const command = new GetStreamingSessionStreamCommand_1.GetStreamingSessionStreamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStudio(args, optionsOrCb, cb) {
        const command = new GetStudioCommand_1.GetStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStudioComponent(args, optionsOrCb, cb) {
        const command = new GetStudioComponentCommand_1.GetStudioComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStudioMember(args, optionsOrCb, cb) {
        const command = new GetStudioMemberCommand_1.GetStudioMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEulaAcceptances(args, optionsOrCb, cb) {
        const command = new ListEulaAcceptancesCommand_1.ListEulaAcceptancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEulas(args, optionsOrCb, cb) {
        const command = new ListEulasCommand_1.ListEulasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLaunchProfileMembers(args, optionsOrCb, cb) {
        const command = new ListLaunchProfileMembersCommand_1.ListLaunchProfileMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLaunchProfiles(args, optionsOrCb, cb) {
        const command = new ListLaunchProfilesCommand_1.ListLaunchProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStreamingImages(args, optionsOrCb, cb) {
        const command = new ListStreamingImagesCommand_1.ListStreamingImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStreamingSessions(args, optionsOrCb, cb) {
        const command = new ListStreamingSessionsCommand_1.ListStreamingSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStudioComponents(args, optionsOrCb, cb) {
        const command = new ListStudioComponentsCommand_1.ListStudioComponentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStudioMembers(args, optionsOrCb, cb) {
        const command = new ListStudioMembersCommand_1.ListStudioMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStudios(args, optionsOrCb, cb) {
        const command = new ListStudiosCommand_1.ListStudiosCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putLaunchProfileMembers(args, optionsOrCb, cb) {
        const command = new PutLaunchProfileMembersCommand_1.PutLaunchProfileMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putStudioMembers(args, optionsOrCb, cb) {
        const command = new PutStudioMembersCommand_1.PutStudioMembersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startStudioSSOConfigurationRepair(args, optionsOrCb, cb) {
        const command = new StartStudioSSOConfigurationRepairCommand_1.StartStudioSSOConfigurationRepairCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateLaunchProfile(args, optionsOrCb, cb) {
        const command = new UpdateLaunchProfileCommand_1.UpdateLaunchProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateLaunchProfileMember(args, optionsOrCb, cb) {
        const command = new UpdateLaunchProfileMemberCommand_1.UpdateLaunchProfileMemberCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStreamingImage(args, optionsOrCb, cb) {
        const command = new UpdateStreamingImageCommand_1.UpdateStreamingImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStudio(args, optionsOrCb, cb) {
        const command = new UpdateStudioCommand_1.UpdateStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStudioComponent(args, optionsOrCb, cb) {
        const command = new UpdateStudioComponentCommand_1.UpdateStudioComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Nimble = Nimble;
//# sourceMappingURL=Nimble.js.map