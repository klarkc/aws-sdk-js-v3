"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand = exports.deserializeAws_restJson1ListProfileObjectTypesCommand = exports.deserializeAws_restJson1ListProfileObjectsCommand = exports.deserializeAws_restJson1ListIntegrationsCommand = exports.deserializeAws_restJson1ListDomainsCommand = exports.deserializeAws_restJson1ListAccountIntegrationsCommand = exports.deserializeAws_restJson1GetProfileObjectTypeTemplateCommand = exports.deserializeAws_restJson1GetProfileObjectTypeCommand = exports.deserializeAws_restJson1GetMatchesCommand = exports.deserializeAws_restJson1GetIntegrationCommand = exports.deserializeAws_restJson1GetDomainCommand = exports.deserializeAws_restJson1DeleteProfileObjectTypeCommand = exports.deserializeAws_restJson1DeleteProfileObjectCommand = exports.deserializeAws_restJson1DeleteProfileKeyCommand = exports.deserializeAws_restJson1DeleteProfileCommand = exports.deserializeAws_restJson1DeleteIntegrationCommand = exports.deserializeAws_restJson1DeleteDomainCommand = exports.deserializeAws_restJson1CreateProfileCommand = exports.deserializeAws_restJson1CreateDomainCommand = exports.deserializeAws_restJson1AddProfileKeyCommand = exports.serializeAws_restJson1UpdateProfileCommand = exports.serializeAws_restJson1UpdateDomainCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SearchProfilesCommand = exports.serializeAws_restJson1PutProfileObjectTypeCommand = exports.serializeAws_restJson1PutProfileObjectCommand = exports.serializeAws_restJson1PutIntegrationCommand = exports.serializeAws_restJson1MergeProfilesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListProfileObjectTypeTemplatesCommand = exports.serializeAws_restJson1ListProfileObjectTypesCommand = exports.serializeAws_restJson1ListProfileObjectsCommand = exports.serializeAws_restJson1ListIntegrationsCommand = exports.serializeAws_restJson1ListDomainsCommand = exports.serializeAws_restJson1ListAccountIntegrationsCommand = exports.serializeAws_restJson1GetProfileObjectTypeTemplateCommand = exports.serializeAws_restJson1GetProfileObjectTypeCommand = exports.serializeAws_restJson1GetMatchesCommand = exports.serializeAws_restJson1GetIntegrationCommand = exports.serializeAws_restJson1GetDomainCommand = exports.serializeAws_restJson1DeleteProfileObjectTypeCommand = exports.serializeAws_restJson1DeleteProfileObjectCommand = exports.serializeAws_restJson1DeleteProfileKeyCommand = exports.serializeAws_restJson1DeleteProfileCommand = exports.serializeAws_restJson1DeleteIntegrationCommand = exports.serializeAws_restJson1DeleteDomainCommand = exports.serializeAws_restJson1CreateProfileCommand = exports.serializeAws_restJson1CreateDomainCommand = exports.serializeAws_restJson1AddProfileKeyCommand = void 0;
exports.deserializeAws_restJson1UpdateProfileCommand = exports.deserializeAws_restJson1UpdateDomainCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SearchProfilesCommand = exports.deserializeAws_restJson1PutProfileObjectTypeCommand = exports.deserializeAws_restJson1PutProfileObjectCommand = exports.deserializeAws_restJson1PutIntegrationCommand = exports.deserializeAws_restJson1MergeProfilesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AddProfileKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/keys";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1AddProfileKeyCommand = serializeAws_restJson1AddProfileKeyCommand;
const serializeAws_restJson1CreateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeadLetterQueueUrl !== undefined &&
            input.DeadLetterQueueUrl !== null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
        ...(input.DefaultEncryptionKey !== undefined &&
            input.DefaultEncryptionKey !== null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
        ...(input.DefaultExpirationDays !== undefined &&
            input.DefaultExpirationDays !== null && { DefaultExpirationDays: input.DefaultExpirationDays }),
        ...(input.Matching !== undefined &&
            input.Matching !== null && { Matching: serializeAws_restJson1MatchingRequest(input.Matching, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDomainCommand = serializeAws_restJson1CreateDomainCommand;
const serializeAws_restJson1CreateProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
        ...(input.AdditionalInformation !== undefined &&
            input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
        ...(input.Address !== undefined &&
            input.Address !== null && { Address: serializeAws_restJson1Address(input.Address, context) }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) }),
        ...(input.BillingAddress !== undefined &&
            input.BillingAddress !== null && {
            BillingAddress: serializeAws_restJson1Address(input.BillingAddress, context),
        }),
        ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
        ...(input.BusinessEmailAddress !== undefined &&
            input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
        ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
        ...(input.BusinessPhoneNumber !== undefined &&
            input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
        ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
        ...(input.HomePhoneNumber !== undefined &&
            input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
        ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
        ...(input.MailingAddress !== undefined &&
            input.MailingAddress !== null && {
            MailingAddress: serializeAws_restJson1Address(input.MailingAddress, context),
        }),
        ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
        ...(input.MobilePhoneNumber !== undefined &&
            input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
        ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
        ...(input.PersonalEmailAddress !== undefined &&
            input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
        ...(input.ShippingAddress !== undefined &&
            input.ShippingAddress !== null && {
            ShippingAddress: serializeAws_restJson1Address(input.ShippingAddress, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateProfileCommand = serializeAws_restJson1CreateProfileCommand;
const serializeAws_restJson1DeleteDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteDomainCommand = serializeAws_restJson1DeleteDomainCommand;
const serializeAws_restJson1DeleteIntegrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/integrations/delete";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteIntegrationCommand = serializeAws_restJson1DeleteIntegrationCommand;
const serializeAws_restJson1DeleteProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/delete";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteProfileCommand = serializeAws_restJson1DeleteProfileCommand;
const serializeAws_restJson1DeleteProfileKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/keys/delete";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteProfileKeyCommand = serializeAws_restJson1DeleteProfileKeyCommand;
const serializeAws_restJson1DeleteProfileObjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/objects/delete";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ObjectTypeName !== undefined &&
            input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
        ...(input.ProfileObjectUniqueKey !== undefined &&
            input.ProfileObjectUniqueKey !== null && { ProfileObjectUniqueKey: input.ProfileObjectUniqueKey }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteProfileObjectCommand = serializeAws_restJson1DeleteProfileObjectCommand;
const serializeAws_restJson1DeleteProfileObjectTypeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}/object-types/{ObjectTypeName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    if (input.ObjectTypeName !== undefined) {
        const labelValue = input.ObjectTypeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
        }
        resolvedPath = resolvedPath.replace("{ObjectTypeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ObjectTypeName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteProfileObjectTypeCommand = serializeAws_restJson1DeleteProfileObjectTypeCommand;
const serializeAws_restJson1GetDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetDomainCommand = serializeAws_restJson1GetDomainCommand;
const serializeAws_restJson1GetIntegrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/integrations";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetIntegrationCommand = serializeAws_restJson1GetIntegrationCommand;
const serializeAws_restJson1GetMatchesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}/matches";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetMatchesCommand = serializeAws_restJson1GetMatchesCommand;
const serializeAws_restJson1GetProfileObjectTypeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}/object-types/{ObjectTypeName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    if (input.ObjectTypeName !== undefined) {
        const labelValue = input.ObjectTypeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
        }
        resolvedPath = resolvedPath.replace("{ObjectTypeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ObjectTypeName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetProfileObjectTypeCommand = serializeAws_restJson1GetProfileObjectTypeCommand;
const serializeAws_restJson1GetProfileObjectTypeTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/templates/{TemplateId}";
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetProfileObjectTypeTemplateCommand = serializeAws_restJson1GetProfileObjectTypeTemplateCommand;
const serializeAws_restJson1ListAccountIntegrationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/integrations";
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAccountIntegrationsCommand = serializeAws_restJson1ListAccountIntegrationsCommand;
const serializeAws_restJson1ListDomainsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains";
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDomainsCommand = serializeAws_restJson1ListDomainsCommand;
const serializeAws_restJson1ListIntegrationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}/integrations";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListIntegrationsCommand = serializeAws_restJson1ListIntegrationsCommand;
const serializeAws_restJson1ListProfileObjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/objects";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    body = JSON.stringify({
        ...(input.ObjectTypeName !== undefined &&
            input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListProfileObjectsCommand = serializeAws_restJson1ListProfileObjectsCommand;
const serializeAws_restJson1ListProfileObjectTypesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/domains/{DomainName}/object-types";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListProfileObjectTypesCommand = serializeAws_restJson1ListProfileObjectTypesCommand;
const serializeAws_restJson1ListProfileObjectTypeTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/templates";
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListProfileObjectTypeTemplatesCommand = serializeAws_restJson1ListProfileObjectTypeTemplatesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1MergeProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/objects/merge";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FieldSourceProfileIds !== undefined &&
            input.FieldSourceProfileIds !== null && {
            FieldSourceProfileIds: serializeAws_restJson1FieldSourceProfileIds(input.FieldSourceProfileIds, context),
        }),
        ...(input.MainProfileId !== undefined && input.MainProfileId !== null && { MainProfileId: input.MainProfileId }),
        ...(input.ProfileIdsToBeMerged !== undefined &&
            input.ProfileIdsToBeMerged !== null && {
            ProfileIdsToBeMerged: serializeAws_restJson1ProfileIdToBeMergedList(input.ProfileIdsToBeMerged, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1MergeProfilesCommand = serializeAws_restJson1MergeProfilesCommand;
const serializeAws_restJson1PutIntegrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/integrations";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.FlowDefinition !== undefined &&
            input.FlowDefinition !== null && {
            FlowDefinition: serializeAws_restJson1FlowDefinition(input.FlowDefinition, context),
        }),
        ...(input.ObjectTypeName !== undefined &&
            input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutIntegrationCommand = serializeAws_restJson1PutIntegrationCommand;
const serializeAws_restJson1PutProfileObjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/objects";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
        ...(input.ObjectTypeName !== undefined &&
            input.ObjectTypeName !== null && { ObjectTypeName: input.ObjectTypeName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutProfileObjectCommand = serializeAws_restJson1PutProfileObjectCommand;
const serializeAws_restJson1PutProfileObjectTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/object-types/{ObjectTypeName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    if (input.ObjectTypeName !== undefined) {
        const labelValue = input.ObjectTypeName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ObjectTypeName.");
        }
        resolvedPath = resolvedPath.replace("{ObjectTypeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ObjectTypeName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AllowProfileCreation !== undefined &&
            input.AllowProfileCreation !== null && { AllowProfileCreation: input.AllowProfileCreation }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EncryptionKey !== undefined && input.EncryptionKey !== null && { EncryptionKey: input.EncryptionKey }),
        ...(input.ExpirationDays !== undefined &&
            input.ExpirationDays !== null && { ExpirationDays: input.ExpirationDays }),
        ...(input.Fields !== undefined &&
            input.Fields !== null && { Fields: serializeAws_restJson1FieldMap(input.Fields, context) }),
        ...(input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_restJson1KeyMap(input.Keys, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutProfileObjectTypeCommand = serializeAws_restJson1PutProfileObjectTypeCommand;
const serializeAws_restJson1SearchProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles/search";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    body = JSON.stringify({
        ...(input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1requestValueList(input.Values, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1SearchProfilesCommand = serializeAws_restJson1SearchProfilesCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeadLetterQueueUrl !== undefined &&
            input.DeadLetterQueueUrl !== null && { DeadLetterQueueUrl: input.DeadLetterQueueUrl }),
        ...(input.DefaultEncryptionKey !== undefined &&
            input.DefaultEncryptionKey !== null && { DefaultEncryptionKey: input.DefaultEncryptionKey }),
        ...(input.DefaultExpirationDays !== undefined &&
            input.DefaultExpirationDays !== null && { DefaultExpirationDays: input.DefaultExpirationDays }),
        ...(input.Matching !== undefined &&
            input.Matching !== null && { Matching: serializeAws_restJson1MatchingRequest(input.Matching, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDomainCommand = serializeAws_restJson1UpdateDomainCommand;
const serializeAws_restJson1UpdateProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/domains/{DomainName}/profiles";
    if (input.DomainName !== undefined) {
        const labelValue = input.DomainName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DomainName.");
        }
        resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DomainName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
        ...(input.AdditionalInformation !== undefined &&
            input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
        ...(input.Address !== undefined &&
            input.Address !== null && { Address: serializeAws_restJson1UpdateAddress(input.Address, context) }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1UpdateAttributes(input.Attributes, context) }),
        ...(input.BillingAddress !== undefined &&
            input.BillingAddress !== null && {
            BillingAddress: serializeAws_restJson1UpdateAddress(input.BillingAddress, context),
        }),
        ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
        ...(input.BusinessEmailAddress !== undefined &&
            input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
        ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
        ...(input.BusinessPhoneNumber !== undefined &&
            input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
        ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
        ...(input.HomePhoneNumber !== undefined &&
            input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
        ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
        ...(input.MailingAddress !== undefined &&
            input.MailingAddress !== null && {
            MailingAddress: serializeAws_restJson1UpdateAddress(input.MailingAddress, context),
        }),
        ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
        ...(input.MobilePhoneNumber !== undefined &&
            input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
        ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
        ...(input.PersonalEmailAddress !== undefined &&
            input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
        ...(input.ProfileId !== undefined && input.ProfileId !== null && { ProfileId: input.ProfileId }),
        ...(input.ShippingAddress !== undefined &&
            input.ShippingAddress !== null && {
            ShippingAddress: serializeAws_restJson1UpdateAddress(input.ShippingAddress, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateProfileCommand = serializeAws_restJson1UpdateProfileCommand;
const deserializeAws_restJson1AddProfileKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddProfileKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        KeyName: undefined,
        Values: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.KeyName !== undefined && data.KeyName !== null) {
        contents.KeyName = data.KeyName;
    }
    if (data.Values !== undefined && data.Values !== null) {
        contents.Values = deserializeAws_restJson1requestValueList(data.Values, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddProfileKeyCommand = deserializeAws_restJson1AddProfileKeyCommand;
const deserializeAws_restJson1AddProfileKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DeadLetterQueueUrl: undefined,
        DefaultEncryptionKey: undefined,
        DefaultExpirationDays: undefined,
        DomainName: undefined,
        LastUpdatedAt: undefined,
        Matching: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
        contents.DeadLetterQueueUrl = data.DeadLetterQueueUrl;
    }
    if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
        contents.DefaultEncryptionKey = data.DefaultEncryptionKey;
    }
    if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
        contents.DefaultExpirationDays = data.DefaultExpirationDays;
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.Matching !== undefined && data.Matching !== null) {
        contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDomainCommand = deserializeAws_restJson1CreateDomainCommand;
const deserializeAws_restJson1CreateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProfileId !== undefined && data.ProfileId !== null) {
        contents.ProfileId = data.ProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProfileCommand = deserializeAws_restJson1CreateProfileCommand;
const deserializeAws_restJson1CreateProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainCommand = deserializeAws_restJson1DeleteDomainCommand;
const deserializeAws_restJson1DeleteDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteIntegrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIntegrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIntegrationCommand = deserializeAws_restJson1DeleteIntegrationCommand;
const deserializeAws_restJson1DeleteIntegrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProfileCommand = deserializeAws_restJson1DeleteProfileCommand;
const deserializeAws_restJson1DeleteProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteProfileKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProfileKeyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProfileKeyCommand = deserializeAws_restJson1DeleteProfileKeyCommand;
const deserializeAws_restJson1DeleteProfileKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteProfileObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProfileObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProfileObjectCommand = deserializeAws_restJson1DeleteProfileObjectCommand;
const deserializeAws_restJson1DeleteProfileObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteProfileObjectTypeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProfileObjectTypeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProfileObjectTypeCommand = deserializeAws_restJson1DeleteProfileObjectTypeCommand;
const deserializeAws_restJson1DeleteProfileObjectTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DeadLetterQueueUrl: undefined,
        DefaultEncryptionKey: undefined,
        DefaultExpirationDays: undefined,
        DomainName: undefined,
        LastUpdatedAt: undefined,
        Matching: undefined,
        Stats: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
        contents.DeadLetterQueueUrl = data.DeadLetterQueueUrl;
    }
    if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
        contents.DefaultEncryptionKey = data.DefaultEncryptionKey;
    }
    if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
        contents.DefaultExpirationDays = data.DefaultExpirationDays;
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.Matching !== undefined && data.Matching !== null) {
        contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
    }
    if (data.Stats !== undefined && data.Stats !== null) {
        contents.Stats = deserializeAws_restJson1DomainStats(data.Stats, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainCommand = deserializeAws_restJson1GetDomainCommand;
const deserializeAws_restJson1GetDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetIntegrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIntegrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DomainName: undefined,
        LastUpdatedAt: undefined,
        ObjectTypeName: undefined,
        Tags: undefined,
        Uri: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
        contents.ObjectTypeName = data.ObjectTypeName;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.Uri !== undefined && data.Uri !== null) {
        contents.Uri = data.Uri;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntegrationCommand = deserializeAws_restJson1GetIntegrationCommand;
const deserializeAws_restJson1GetIntegrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetMatchesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMatchesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MatchGenerationDate: undefined,
        Matches: undefined,
        NextToken: undefined,
        PotentialMatches: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MatchGenerationDate !== undefined && data.MatchGenerationDate !== null) {
        contents.MatchGenerationDate = new Date(Math.round(data.MatchGenerationDate * 1000));
    }
    if (data.Matches !== undefined && data.Matches !== null) {
        contents.Matches = deserializeAws_restJson1MatchesList(data.Matches, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.PotentialMatches !== undefined && data.PotentialMatches !== null) {
        contents.PotentialMatches = data.PotentialMatches;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMatchesCommand = deserializeAws_restJson1GetMatchesCommand;
const deserializeAws_restJson1GetMatchesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetProfileObjectTypeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetProfileObjectTypeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AllowProfileCreation: undefined,
        CreatedAt: undefined,
        Description: undefined,
        EncryptionKey: undefined,
        ExpirationDays: undefined,
        Fields: undefined,
        Keys: undefined,
        LastUpdatedAt: undefined,
        ObjectTypeName: undefined,
        Tags: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
        contents.AllowProfileCreation = data.AllowProfileCreation;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.EncryptionKey !== undefined && data.EncryptionKey !== null) {
        contents.EncryptionKey = data.EncryptionKey;
    }
    if (data.ExpirationDays !== undefined && data.ExpirationDays !== null) {
        contents.ExpirationDays = data.ExpirationDays;
    }
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
    }
    if (data.Keys !== undefined && data.Keys !== null) {
        contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
        contents.ObjectTypeName = data.ObjectTypeName;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetProfileObjectTypeCommand = deserializeAws_restJson1GetProfileObjectTypeCommand;
const deserializeAws_restJson1GetProfileObjectTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetProfileObjectTypeTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetProfileObjectTypeTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AllowProfileCreation: undefined,
        Fields: undefined,
        Keys: undefined,
        SourceName: undefined,
        SourceObject: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
        contents.AllowProfileCreation = data.AllowProfileCreation;
    }
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
    }
    if (data.Keys !== undefined && data.Keys !== null) {
        contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
    }
    if (data.SourceName !== undefined && data.SourceName !== null) {
        contents.SourceName = data.SourceName;
    }
    if (data.SourceObject !== undefined && data.SourceObject !== null) {
        contents.SourceObject = data.SourceObject;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetProfileObjectTypeTemplateCommand = deserializeAws_restJson1GetProfileObjectTypeTemplateCommand;
const deserializeAws_restJson1GetProfileObjectTypeTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListAccountIntegrationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAccountIntegrationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1IntegrationList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAccountIntegrationsCommand = deserializeAws_restJson1ListAccountIntegrationsCommand;
const deserializeAws_restJson1ListAccountIntegrationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListDomainsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDomainsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1DomainList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainsCommand = deserializeAws_restJson1ListDomainsCommand;
const deserializeAws_restJson1ListDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListIntegrationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIntegrationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1IntegrationList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIntegrationsCommand = deserializeAws_restJson1ListIntegrationsCommand;
const deserializeAws_restJson1ListIntegrationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProfileObjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfileObjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1ProfileObjectList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfileObjectsCommand = deserializeAws_restJson1ListProfileObjectsCommand;
const deserializeAws_restJson1ListProfileObjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProfileObjectTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfileObjectTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1ProfileObjectTypeList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfileObjectTypesCommand = deserializeAws_restJson1ListProfileObjectTypesCommand;
const deserializeAws_restJson1ListProfileObjectTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfileObjectTypeTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1ProfileObjectTypeTemplateList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand = deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand;
const deserializeAws_restJson1ListProfileObjectTypeTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1MergeProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1MergeProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1MergeProfilesCommand = deserializeAws_restJson1MergeProfilesCommand;
const deserializeAws_restJson1MergeProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutIntegrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutIntegrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DomainName: undefined,
        LastUpdatedAt: undefined,
        ObjectTypeName: undefined,
        Tags: undefined,
        Uri: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
        contents.ObjectTypeName = data.ObjectTypeName;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.Uri !== undefined && data.Uri !== null) {
        contents.Uri = data.Uri;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutIntegrationCommand = deserializeAws_restJson1PutIntegrationCommand;
const deserializeAws_restJson1PutIntegrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutProfileObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutProfileObjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProfileObjectUniqueKey: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProfileObjectUniqueKey !== undefined && data.ProfileObjectUniqueKey !== null) {
        contents.ProfileObjectUniqueKey = data.ProfileObjectUniqueKey;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutProfileObjectCommand = deserializeAws_restJson1PutProfileObjectCommand;
const deserializeAws_restJson1PutProfileObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutProfileObjectTypeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutProfileObjectTypeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AllowProfileCreation: undefined,
        CreatedAt: undefined,
        Description: undefined,
        EncryptionKey: undefined,
        ExpirationDays: undefined,
        Fields: undefined,
        Keys: undefined,
        LastUpdatedAt: undefined,
        ObjectTypeName: undefined,
        Tags: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AllowProfileCreation !== undefined && data.AllowProfileCreation !== null) {
        contents.AllowProfileCreation = data.AllowProfileCreation;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.EncryptionKey !== undefined && data.EncryptionKey !== null) {
        contents.EncryptionKey = data.EncryptionKey;
    }
    if (data.ExpirationDays !== undefined && data.ExpirationDays !== null) {
        contents.ExpirationDays = data.ExpirationDays;
    }
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1FieldMap(data.Fields, context);
    }
    if (data.Keys !== undefined && data.Keys !== null) {
        contents.Keys = deserializeAws_restJson1KeyMap(data.Keys, context);
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.ObjectTypeName !== undefined && data.ObjectTypeName !== null) {
        contents.ObjectTypeName = data.ObjectTypeName;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutProfileObjectTypeCommand = deserializeAws_restJson1PutProfileObjectTypeCommand;
const deserializeAws_restJson1PutProfileObjectTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SearchProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1ProfileList(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchProfilesCommand = deserializeAws_restJson1SearchProfilesCommand;
const deserializeAws_restJson1SearchProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreatedAt: undefined,
        DeadLetterQueueUrl: undefined,
        DefaultEncryptionKey: undefined,
        DefaultExpirationDays: undefined,
        DomainName: undefined,
        LastUpdatedAt: undefined,
        Matching: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(Math.round(data.CreatedAt * 1000));
    }
    if (data.DeadLetterQueueUrl !== undefined && data.DeadLetterQueueUrl !== null) {
        contents.DeadLetterQueueUrl = data.DeadLetterQueueUrl;
    }
    if (data.DefaultEncryptionKey !== undefined && data.DefaultEncryptionKey !== null) {
        contents.DefaultEncryptionKey = data.DefaultEncryptionKey;
    }
    if (data.DefaultExpirationDays !== undefined && data.DefaultExpirationDays !== null) {
        contents.DefaultExpirationDays = data.DefaultExpirationDays;
    }
    if (data.DomainName !== undefined && data.DomainName !== null) {
        contents.DomainName = data.DomainName;
    }
    if (data.LastUpdatedAt !== undefined && data.LastUpdatedAt !== null) {
        contents.LastUpdatedAt = new Date(Math.round(data.LastUpdatedAt * 1000));
    }
    if (data.Matching !== undefined && data.Matching !== null) {
        contents.Matching = deserializeAws_restJson1MatchingResponse(data.Matching, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDomainCommand = deserializeAws_restJson1UpdateDomainCommand;
const deserializeAws_restJson1UpdateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProfileId !== undefined && data.ProfileId !== null) {
        contents.ProfileId = data.ProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateProfileCommand = deserializeAws_restJson1UpdateProfileCommand;
const deserializeAws_restJson1UpdateProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.customerprofiles#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequestException":
        case "com.amazonaws.customerprofiles#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.customerprofiles#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.customerprofiles#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.customerprofiles#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1Address = (input, context) => {
    return {
        ...(input.Address1 !== undefined && input.Address1 !== null && { Address1: input.Address1 }),
        ...(input.Address2 !== undefined && input.Address2 !== null && { Address2: input.Address2 }),
        ...(input.Address3 !== undefined && input.Address3 !== null && { Address3: input.Address3 }),
        ...(input.Address4 !== undefined && input.Address4 !== null && { Address4: input.Address4 }),
        ...(input.City !== undefined && input.City !== null && { City: input.City }),
        ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
        ...(input.County !== undefined && input.County !== null && { County: input.County }),
        ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
        ...(input.Province !== undefined && input.Province !== null && { Province: input.Province }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_restJson1Attributes = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1AttributeSourceIdMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ConnectorOperator = (input, context) => {
    return {
        ...(input.Marketo !== undefined && input.Marketo !== null && { Marketo: input.Marketo }),
        ...(input.S3 !== undefined && input.S3 !== null && { S3: input.S3 }),
        ...(input.Salesforce !== undefined && input.Salesforce !== null && { Salesforce: input.Salesforce }),
        ...(input.ServiceNow !== undefined && input.ServiceNow !== null && { ServiceNow: input.ServiceNow }),
        ...(input.Zendesk !== undefined && input.Zendesk !== null && { Zendesk: input.Zendesk }),
    };
};
const serializeAws_restJson1FieldMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ObjectTypeField(value, context),
        };
    }, {});
};
const serializeAws_restJson1FieldNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FieldSourceProfileIds = (input, context) => {
    return {
        ...(input.AccountNumber !== undefined && input.AccountNumber !== null && { AccountNumber: input.AccountNumber }),
        ...(input.AdditionalInformation !== undefined &&
            input.AdditionalInformation !== null && { AdditionalInformation: input.AdditionalInformation }),
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1AttributeSourceIdMap(input.Attributes, context),
        }),
        ...(input.BillingAddress !== undefined &&
            input.BillingAddress !== null && { BillingAddress: input.BillingAddress }),
        ...(input.BirthDate !== undefined && input.BirthDate !== null && { BirthDate: input.BirthDate }),
        ...(input.BusinessEmailAddress !== undefined &&
            input.BusinessEmailAddress !== null && { BusinessEmailAddress: input.BusinessEmailAddress }),
        ...(input.BusinessName !== undefined && input.BusinessName !== null && { BusinessName: input.BusinessName }),
        ...(input.BusinessPhoneNumber !== undefined &&
            input.BusinessPhoneNumber !== null && { BusinessPhoneNumber: input.BusinessPhoneNumber }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
        ...(input.Gender !== undefined && input.Gender !== null && { Gender: input.Gender }),
        ...(input.HomePhoneNumber !== undefined &&
            input.HomePhoneNumber !== null && { HomePhoneNumber: input.HomePhoneNumber }),
        ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
        ...(input.MailingAddress !== undefined &&
            input.MailingAddress !== null && { MailingAddress: input.MailingAddress }),
        ...(input.MiddleName !== undefined && input.MiddleName !== null && { MiddleName: input.MiddleName }),
        ...(input.MobilePhoneNumber !== undefined &&
            input.MobilePhoneNumber !== null && { MobilePhoneNumber: input.MobilePhoneNumber }),
        ...(input.PartyType !== undefined && input.PartyType !== null && { PartyType: input.PartyType }),
        ...(input.PersonalEmailAddress !== undefined &&
            input.PersonalEmailAddress !== null && { PersonalEmailAddress: input.PersonalEmailAddress }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
        ...(input.ShippingAddress !== undefined &&
            input.ShippingAddress !== null && { ShippingAddress: input.ShippingAddress }),
    };
};
const serializeAws_restJson1FlowDefinition = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FlowName !== undefined && input.FlowName !== null && { FlowName: input.FlowName }),
        ...(input.KmsArn !== undefined && input.KmsArn !== null && { KmsArn: input.KmsArn }),
        ...(input.SourceFlowConfig !== undefined &&
            input.SourceFlowConfig !== null && {
            SourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.SourceFlowConfig, context),
        }),
        ...(input.Tasks !== undefined &&
            input.Tasks !== null && { Tasks: serializeAws_restJson1Tasks(input.Tasks, context) }),
        ...(input.TriggerConfig !== undefined &&
            input.TriggerConfig !== null && {
            TriggerConfig: serializeAws_restJson1TriggerConfig(input.TriggerConfig, context),
        }),
    };
};
const serializeAws_restJson1IncrementalPullConfig = (input, context) => {
    return {
        ...(input.DatetimeTypeFieldName !== undefined &&
            input.DatetimeTypeFieldName !== null && { DatetimeTypeFieldName: input.DatetimeTypeFieldName }),
    };
};
const serializeAws_restJson1KeyMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ObjectTypeKeyList(value, context),
        };
    }, {});
};
const serializeAws_restJson1MarketoSourceProperties = (input, context) => {
    return {
        ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    };
};
const serializeAws_restJson1MatchingRequest = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1ObjectTypeField = (input, context) => {
    return {
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    };
};
const serializeAws_restJson1ObjectTypeKey = (input, context) => {
    return {
        ...(input.FieldNames !== undefined &&
            input.FieldNames !== null && { FieldNames: serializeAws_restJson1FieldNameList(input.FieldNames, context) }),
        ...(input.StandardIdentifiers !== undefined &&
            input.StandardIdentifiers !== null && {
            StandardIdentifiers: serializeAws_restJson1StandardIdentifierList(input.StandardIdentifiers, context),
        }),
    };
};
const serializeAws_restJson1ObjectTypeKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ObjectTypeKey(entry, context);
    });
};
const serializeAws_restJson1ProfileIdToBeMergedList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1requestValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1S3SourceProperties = (input, context) => {
    return {
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.BucketPrefix !== undefined && input.BucketPrefix !== null && { BucketPrefix: input.BucketPrefix }),
    };
};
const serializeAws_restJson1SalesforceSourceProperties = (input, context) => {
    return {
        ...(input.EnableDynamicFieldUpdate !== undefined &&
            input.EnableDynamicFieldUpdate !== null && { EnableDynamicFieldUpdate: input.EnableDynamicFieldUpdate }),
        ...(input.IncludeDeletedRecords !== undefined &&
            input.IncludeDeletedRecords !== null && { IncludeDeletedRecords: input.IncludeDeletedRecords }),
        ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    };
};
const serializeAws_restJson1ScheduledTriggerProperties = (input, context) => {
    return {
        ...(input.DataPullMode !== undefined && input.DataPullMode !== null && { DataPullMode: input.DataPullMode }),
        ...(input.FirstExecutionFrom !== undefined &&
            input.FirstExecutionFrom !== null && {
            FirstExecutionFrom: Math.round(input.FirstExecutionFrom.getTime() / 1000),
        }),
        ...(input.ScheduleEndTime !== undefined &&
            input.ScheduleEndTime !== null && { ScheduleEndTime: Math.round(input.ScheduleEndTime.getTime() / 1000) }),
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
        ...(input.ScheduleOffset !== undefined &&
            input.ScheduleOffset !== null && { ScheduleOffset: input.ScheduleOffset }),
        ...(input.ScheduleStartTime !== undefined &&
            input.ScheduleStartTime !== null && { ScheduleStartTime: Math.round(input.ScheduleStartTime.getTime() / 1000) }),
        ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    };
};
const serializeAws_restJson1ServiceNowSourceProperties = (input, context) => {
    return {
        ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    };
};
const serializeAws_restJson1SourceConnectorProperties = (input, context) => {
    return {
        ...(input.Marketo !== undefined &&
            input.Marketo !== null && { Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context) }),
        ...(input.S3 !== undefined &&
            input.S3 !== null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }),
        ...(input.Salesforce !== undefined &&
            input.Salesforce !== null && {
            Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
        }),
        ...(input.ServiceNow !== undefined &&
            input.ServiceNow !== null && {
            ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
        }),
        ...(input.Zendesk !== undefined &&
            input.Zendesk !== null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }),
    };
};
const serializeAws_restJson1SourceFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SourceFlowConfig = (input, context) => {
    return {
        ...(input.ConnectorProfileName !== undefined &&
            input.ConnectorProfileName !== null && { ConnectorProfileName: input.ConnectorProfileName }),
        ...(input.ConnectorType !== undefined && input.ConnectorType !== null && { ConnectorType: input.ConnectorType }),
        ...(input.IncrementalPullConfig !== undefined &&
            input.IncrementalPullConfig !== null && {
            IncrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.IncrementalPullConfig, context),
        }),
        ...(input.SourceConnectorProperties !== undefined &&
            input.SourceConnectorProperties !== null && {
            SourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(input.SourceConnectorProperties, context),
        }),
    };
};
const serializeAws_restJson1StandardIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1Task = (input, context) => {
    return {
        ...(input.ConnectorOperator !== undefined &&
            input.ConnectorOperator !== null && {
            ConnectorOperator: serializeAws_restJson1ConnectorOperator(input.ConnectorOperator, context),
        }),
        ...(input.DestinationField !== undefined &&
            input.DestinationField !== null && { DestinationField: input.DestinationField }),
        ...(input.SourceFields !== undefined &&
            input.SourceFields !== null && { SourceFields: serializeAws_restJson1SourceFields(input.SourceFields, context) }),
        ...(input.TaskProperties !== undefined &&
            input.TaskProperties !== null && {
            TaskProperties: serializeAws_restJson1TaskPropertiesMap(input.TaskProperties, context),
        }),
        ...(input.TaskType !== undefined && input.TaskType !== null && { TaskType: input.TaskType }),
    };
};
const serializeAws_restJson1TaskPropertiesMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1Tasks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Task(entry, context);
    });
};
const serializeAws_restJson1TriggerConfig = (input, context) => {
    return {
        ...(input.TriggerProperties !== undefined &&
            input.TriggerProperties !== null && {
            TriggerProperties: serializeAws_restJson1TriggerProperties(input.TriggerProperties, context),
        }),
        ...(input.TriggerType !== undefined && input.TriggerType !== null && { TriggerType: input.TriggerType }),
    };
};
const serializeAws_restJson1TriggerProperties = (input, context) => {
    return {
        ...(input.Scheduled !== undefined &&
            input.Scheduled !== null && {
            Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
        }),
    };
};
const serializeAws_restJson1UpdateAddress = (input, context) => {
    return {
        ...(input.Address1 !== undefined && input.Address1 !== null && { Address1: input.Address1 }),
        ...(input.Address2 !== undefined && input.Address2 !== null && { Address2: input.Address2 }),
        ...(input.Address3 !== undefined && input.Address3 !== null && { Address3: input.Address3 }),
        ...(input.Address4 !== undefined && input.Address4 !== null && { Address4: input.Address4 }),
        ...(input.City !== undefined && input.City !== null && { City: input.City }),
        ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
        ...(input.County !== undefined && input.County !== null && { County: input.County }),
        ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
        ...(input.Province !== undefined && input.Province !== null && { Province: input.Province }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_restJson1UpdateAttributes = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ZendeskSourceProperties = (input, context) => {
    return {
        ...(input.Object !== undefined && input.Object !== null && { Object: input.Object }),
    };
};
const deserializeAws_restJson1Address = (output, context) => {
    return {
        Address1: output.Address1 !== undefined && output.Address1 !== null ? output.Address1 : undefined,
        Address2: output.Address2 !== undefined && output.Address2 !== null ? output.Address2 : undefined,
        Address3: output.Address3 !== undefined && output.Address3 !== null ? output.Address3 : undefined,
        Address4: output.Address4 !== undefined && output.Address4 !== null ? output.Address4 : undefined,
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        County: output.County !== undefined && output.County !== null ? output.County : undefined,
        PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
        Province: output.Province !== undefined && output.Province !== null ? output.Province : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1Attributes = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1DomainList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListDomainItem(entry, context);
    });
};
const deserializeAws_restJson1DomainStats = (output, context) => {
    return {
        MeteringProfileCount: output.MeteringProfileCount !== undefined && output.MeteringProfileCount !== null
            ? output.MeteringProfileCount
            : undefined,
        ObjectCount: output.ObjectCount !== undefined && output.ObjectCount !== null ? output.ObjectCount : undefined,
        ProfileCount: output.ProfileCount !== undefined && output.ProfileCount !== null ? output.ProfileCount : undefined,
        TotalSize: output.TotalSize !== undefined && output.TotalSize !== null ? output.TotalSize : undefined,
    };
};
const deserializeAws_restJson1FieldMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ObjectTypeField(value, context),
        };
    }, {});
};
const deserializeAws_restJson1FieldNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1IntegrationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListIntegrationItem(entry, context);
    });
};
const deserializeAws_restJson1KeyMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ObjectTypeKeyList(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ListDomainItem = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ListIntegrationItem = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        ObjectTypeName: output.ObjectTypeName !== undefined && output.ObjectTypeName !== null ? output.ObjectTypeName : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Uri: output.Uri !== undefined && output.Uri !== null ? output.Uri : undefined,
    };
};
const deserializeAws_restJson1ListProfileObjectsItem = (output, context) => {
    return {
        Object: output.Object !== undefined && output.Object !== null ? output.Object : undefined,
        ObjectTypeName: output.ObjectTypeName !== undefined && output.ObjectTypeName !== null ? output.ObjectTypeName : undefined,
        ProfileObjectUniqueKey: output.ProfileObjectUniqueKey !== undefined && output.ProfileObjectUniqueKey !== null
            ? output.ProfileObjectUniqueKey
            : undefined,
    };
};
const deserializeAws_restJson1ListProfileObjectTypeItem = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        ObjectTypeName: output.ObjectTypeName !== undefined && output.ObjectTypeName !== null ? output.ObjectTypeName : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ListProfileObjectTypeTemplateItem = (output, context) => {
    return {
        SourceName: output.SourceName !== undefined && output.SourceName !== null ? output.SourceName : undefined,
        SourceObject: output.SourceObject !== undefined && output.SourceObject !== null ? output.SourceObject : undefined,
        TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
    };
};
const deserializeAws_restJson1MatchesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MatchItem(entry, context);
    });
};
const deserializeAws_restJson1MatchingResponse = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1MatchItem = (output, context) => {
    return {
        MatchId: output.MatchId !== undefined && output.MatchId !== null ? output.MatchId : undefined,
        ProfileIds: output.ProfileIds !== undefined && output.ProfileIds !== null
            ? deserializeAws_restJson1ProfileIdList(output.ProfileIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1ObjectTypeField = (output, context) => {
    return {
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    };
};
const deserializeAws_restJson1ObjectTypeKey = (output, context) => {
    return {
        FieldNames: output.FieldNames !== undefined && output.FieldNames !== null
            ? deserializeAws_restJson1FieldNameList(output.FieldNames, context)
            : undefined,
        StandardIdentifiers: output.StandardIdentifiers !== undefined && output.StandardIdentifiers !== null
            ? deserializeAws_restJson1StandardIdentifierList(output.StandardIdentifiers, context)
            : undefined,
    };
};
const deserializeAws_restJson1ObjectTypeKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ObjectTypeKey(entry, context);
    });
};
const deserializeAws_restJson1Profile = (output, context) => {
    return {
        AccountNumber: output.AccountNumber !== undefined && output.AccountNumber !== null ? output.AccountNumber : undefined,
        AdditionalInformation: output.AdditionalInformation !== undefined && output.AdditionalInformation !== null
            ? output.AdditionalInformation
            : undefined,
        Address: output.Address !== undefined && output.Address !== null
            ? deserializeAws_restJson1Address(output.Address, context)
            : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1Attributes(output.Attributes, context)
            : undefined,
        BillingAddress: output.BillingAddress !== undefined && output.BillingAddress !== null
            ? deserializeAws_restJson1Address(output.BillingAddress, context)
            : undefined,
        BirthDate: output.BirthDate !== undefined && output.BirthDate !== null ? output.BirthDate : undefined,
        BusinessEmailAddress: output.BusinessEmailAddress !== undefined && output.BusinessEmailAddress !== null
            ? output.BusinessEmailAddress
            : undefined,
        BusinessName: output.BusinessName !== undefined && output.BusinessName !== null ? output.BusinessName : undefined,
        BusinessPhoneNumber: output.BusinessPhoneNumber !== undefined && output.BusinessPhoneNumber !== null
            ? output.BusinessPhoneNumber
            : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
        Gender: output.Gender !== undefined && output.Gender !== null ? output.Gender : undefined,
        HomePhoneNumber: output.HomePhoneNumber !== undefined && output.HomePhoneNumber !== null ? output.HomePhoneNumber : undefined,
        LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
        MailingAddress: output.MailingAddress !== undefined && output.MailingAddress !== null
            ? deserializeAws_restJson1Address(output.MailingAddress, context)
            : undefined,
        MiddleName: output.MiddleName !== undefined && output.MiddleName !== null ? output.MiddleName : undefined,
        MobilePhoneNumber: output.MobilePhoneNumber !== undefined && output.MobilePhoneNumber !== null
            ? output.MobilePhoneNumber
            : undefined,
        PartyType: output.PartyType !== undefined && output.PartyType !== null ? output.PartyType : undefined,
        PersonalEmailAddress: output.PersonalEmailAddress !== undefined && output.PersonalEmailAddress !== null
            ? output.PersonalEmailAddress
            : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        ProfileId: output.ProfileId !== undefined && output.ProfileId !== null ? output.ProfileId : undefined,
        ShippingAddress: output.ShippingAddress !== undefined && output.ShippingAddress !== null
            ? deserializeAws_restJson1Address(output.ShippingAddress, context)
            : undefined,
    };
};
const deserializeAws_restJson1ProfileIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Profile(entry, context);
    });
};
const deserializeAws_restJson1ProfileObjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListProfileObjectsItem(entry, context);
    });
};
const deserializeAws_restJson1ProfileObjectTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListProfileObjectTypeItem(entry, context);
    });
};
const deserializeAws_restJson1ProfileObjectTypeTemplateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListProfileObjectTypeTemplateItem(entry, context);
    });
};
const deserializeAws_restJson1requestValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1StandardIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1.js.map