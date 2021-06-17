"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1GetDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1GetAuthorizationTokenCommand = exports.deserializeAws_restJson1DisposePackageVersionsCommand = exports.deserializeAws_restJson1DisassociateExternalConnectionCommand = exports.deserializeAws_restJson1DescribeRepositoryCommand = exports.deserializeAws_restJson1DescribePackageVersionCommand = exports.deserializeAws_restJson1DescribeDomainCommand = exports.deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1DeleteRepositoryCommand = exports.deserializeAws_restJson1DeletePackageVersionsCommand = exports.deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1DeleteDomainCommand = exports.deserializeAws_restJson1CreateRepositoryCommand = exports.deserializeAws_restJson1CreateDomainCommand = exports.deserializeAws_restJson1CopyPackageVersionsCommand = exports.deserializeAws_restJson1AssociateExternalConnectionCommand = exports.serializeAws_restJson1UpdateRepositoryCommand = exports.serializeAws_restJson1UpdatePackageVersionsStatusCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1PutDomainPermissionsPolicyCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRepositoriesInDomainCommand = exports.serializeAws_restJson1ListRepositoriesCommand = exports.serializeAws_restJson1ListPackageVersionsCommand = exports.serializeAws_restJson1ListPackageVersionDependenciesCommand = exports.serializeAws_restJson1ListPackageVersionAssetsCommand = exports.serializeAws_restJson1ListPackagesCommand = exports.serializeAws_restJson1ListDomainsCommand = exports.serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1GetRepositoryEndpointCommand = exports.serializeAws_restJson1GetPackageVersionReadmeCommand = exports.serializeAws_restJson1GetPackageVersionAssetCommand = exports.serializeAws_restJson1GetDomainPermissionsPolicyCommand = exports.serializeAws_restJson1GetAuthorizationTokenCommand = exports.serializeAws_restJson1DisposePackageVersionsCommand = exports.serializeAws_restJson1DisassociateExternalConnectionCommand = exports.serializeAws_restJson1DescribeRepositoryCommand = exports.serializeAws_restJson1DescribePackageVersionCommand = exports.serializeAws_restJson1DescribeDomainCommand = exports.serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = exports.serializeAws_restJson1DeleteRepositoryCommand = exports.serializeAws_restJson1DeletePackageVersionsCommand = exports.serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = exports.serializeAws_restJson1DeleteDomainCommand = exports.serializeAws_restJson1CreateRepositoryCommand = exports.serializeAws_restJson1CreateDomainCommand = exports.serializeAws_restJson1CopyPackageVersionsCommand = exports.serializeAws_restJson1AssociateExternalConnectionCommand = void 0;
exports.deserializeAws_restJson1UpdateRepositoryCommand = exports.deserializeAws_restJson1UpdatePackageVersionsStatusCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1PutDomainPermissionsPolicyCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRepositoriesInDomainCommand = exports.deserializeAws_restJson1ListRepositoriesCommand = exports.deserializeAws_restJson1ListPackageVersionsCommand = exports.deserializeAws_restJson1ListPackageVersionDependenciesCommand = exports.deserializeAws_restJson1ListPackageVersionAssetsCommand = exports.deserializeAws_restJson1ListPackagesCommand = exports.deserializeAws_restJson1ListDomainsCommand = exports.deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = exports.deserializeAws_restJson1GetRepositoryEndpointCommand = exports.deserializeAws_restJson1GetPackageVersionReadmeCommand = exports.deserializeAws_restJson1GetPackageVersionAssetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1AssociateExternalConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository/external-connection";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
    };
    let body;
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
exports.serializeAws_restJson1AssociateExternalConnectionCommand = serializeAws_restJson1AssociateExternalConnectionCommand;
const serializeAws_restJson1CopyPackageVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/package/versions/copy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.sourceRepository !== undefined && { "source-repository": input.sourceRepository }),
        ...(input.destinationRepository !== undefined && { "destination-repository": input.destinationRepository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.allowOverwrite !== undefined &&
            input.allowOverwrite !== null && { allowOverwrite: input.allowOverwrite }),
        ...(input.includeFromUpstream !== undefined &&
            input.includeFromUpstream !== null && { includeFromUpstream: input.includeFromUpstream }),
        ...(input.versionRevisions !== undefined &&
            input.versionRevisions !== null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions !== undefined &&
            input.versions !== null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
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
exports.serializeAws_restJson1CopyPackageVersionsCommand = serializeAws_restJson1CopyPackageVersionsCommand;
const serializeAws_restJson1CreateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
    };
    let body;
    body = JSON.stringify({
        ...(input.encryptionKey !== undefined && input.encryptionKey !== null && { encryptionKey: input.encryptionKey }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDomainCommand = serializeAws_restJson1CreateDomainCommand;
const serializeAws_restJson1CreateRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
        ...(input.upstreams !== undefined &&
            input.upstreams !== null && {
            upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
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
        query,
        body,
    });
};
exports.serializeAws_restJson1CreateRepositoryCommand = serializeAws_restJson1CreateRepositoryCommand;
const serializeAws_restJson1DeleteDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
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
exports.serializeAws_restJson1DeleteDomainCommand = serializeAws_restJson1DeleteDomainCommand;
const serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/domain/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
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
exports.serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = serializeAws_restJson1DeleteDomainPermissionsPolicyCommand;
const serializeAws_restJson1DeletePackageVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/package/versions/delete";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus !== undefined &&
            input.expectedStatus !== null && { expectedStatus: input.expectedStatus }),
        ...(input.versions !== undefined &&
            input.versions !== null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
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
exports.serializeAws_restJson1DeletePackageVersionsCommand = serializeAws_restJson1DeletePackageVersionsCommand;
const serializeAws_restJson1DeleteRepositoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
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
exports.serializeAws_restJson1DeleteRepositoryCommand = serializeAws_restJson1DeleteRepositoryCommand;
const serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository/permissions/policies";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
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
exports.serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1DescribeDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/domain";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
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
exports.serializeAws_restJson1DescribeDomainCommand = serializeAws_restJson1DescribeDomainCommand;
const serializeAws_restJson1DescribePackageVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/version";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
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
exports.serializeAws_restJson1DescribePackageVersionCommand = serializeAws_restJson1DescribePackageVersionCommand;
const serializeAws_restJson1DescribeRepositoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
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
exports.serializeAws_restJson1DescribeRepositoryCommand = serializeAws_restJson1DescribeRepositoryCommand;
const serializeAws_restJson1DisassociateExternalConnectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository/external-connection";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
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
exports.serializeAws_restJson1DisassociateExternalConnectionCommand = serializeAws_restJson1DisassociateExternalConnectionCommand;
const serializeAws_restJson1DisposePackageVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/package/versions/dispose";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus !== undefined &&
            input.expectedStatus !== null && { expectedStatus: input.expectedStatus }),
        ...(input.versionRevisions !== undefined &&
            input.versionRevisions !== null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions !== undefined &&
            input.versions !== null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
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
exports.serializeAws_restJson1DisposePackageVersionsCommand = serializeAws_restJson1DisposePackageVersionsCommand;
const serializeAws_restJson1GetAuthorizationTokenCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/authorization-token";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.durationSeconds !== undefined && { duration: input.durationSeconds.toString() }),
    };
    let body;
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
exports.serializeAws_restJson1GetAuthorizationTokenCommand = serializeAws_restJson1GetAuthorizationTokenCommand;
const serializeAws_restJson1GetDomainPermissionsPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/domain/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
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
exports.serializeAws_restJson1GetDomainPermissionsPolicyCommand = serializeAws_restJson1GetDomainPermissionsPolicyCommand;
const serializeAws_restJson1GetPackageVersionAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/version/asset";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.asset !== undefined && { asset: input.asset }),
        ...(input.packageVersionRevision !== undefined && { revision: input.packageVersionRevision }),
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
exports.serializeAws_restJson1GetPackageVersionAssetCommand = serializeAws_restJson1GetPackageVersionAssetCommand;
const serializeAws_restJson1GetPackageVersionReadmeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/version/readme";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
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
exports.serializeAws_restJson1GetPackageVersionReadmeCommand = serializeAws_restJson1GetPackageVersionReadmeCommand;
const serializeAws_restJson1GetRepositoryEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository/endpoint";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
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
exports.serializeAws_restJson1GetRepositoryEndpointCommand = serializeAws_restJson1GetRepositoryEndpointCommand;
const serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repository/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
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
exports.serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = serializeAws_restJson1GetRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1ListDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/domains";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListDomainsCommand = serializeAws_restJson1ListDomainsCommand;
const serializeAws_restJson1ListPackagesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/packages";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.packagePrefix !== undefined && { "package-prefix": input.packagePrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListPackagesCommand = serializeAws_restJson1ListPackagesCommand;
const serializeAws_restJson1ListPackageVersionAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/version/assets";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListPackageVersionAssetsCommand = serializeAws_restJson1ListPackageVersionAssetsCommand;
const serializeAws_restJson1ListPackageVersionDependenciesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/version/dependencies";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.packageVersion !== undefined && { version: input.packageVersion }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListPackageVersionDependenciesCommand = serializeAws_restJson1ListPackageVersionDependenciesCommand;
const serializeAws_restJson1ListPackageVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/package/versions";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
        ...(input.status !== undefined && { status: input.status }),
        ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListPackageVersionsCommand = serializeAws_restJson1ListPackageVersionsCommand;
const serializeAws_restJson1ListRepositoriesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/repositories";
    const query = {
        ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListRepositoriesCommand = serializeAws_restJson1ListRepositoriesCommand;
const serializeAws_restJson1ListRepositoriesInDomainCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/domain/repositories";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.administratorAccount !== undefined && { "administrator-account": input.administratorAccount }),
        ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
        ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    };
    let body;
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
exports.serializeAws_restJson1ListRepositoriesInDomainCommand = serializeAws_restJson1ListRepositoriesInDomainCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutDomainPermissionsPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/domain/permissions/policy";
    let body;
    body = JSON.stringify({
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
        ...(input.domainOwner !== undefined && input.domainOwner !== null && { domainOwner: input.domainOwner }),
        ...(input.policyDocument !== undefined &&
            input.policyDocument !== null && { policyDocument: input.policyDocument }),
        ...(input.policyRevision !== undefined &&
            input.policyRevision !== null && { policyRevision: input.policyRevision }),
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
exports.serializeAws_restJson1PutDomainPermissionsPolicyCommand = serializeAws_restJson1PutDomainPermissionsPolicyCommand;
const serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/repository/permissions/policy";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.policyDocument !== undefined &&
            input.policyDocument !== null && { policyDocument: input.policyDocument }),
        ...(input.policyRevision !== undefined &&
            input.policyRevision !== null && { policyRevision: input.policyRevision }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = serializeAws_restJson1PutRepositoryPermissionsPolicyCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/tag";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/untag";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdatePackageVersionsStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/package/versions/update_status";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
        ...(input.format !== undefined && { format: input.format }),
        ...(input.namespace !== undefined && { namespace: input.namespace }),
        ...(input.package !== undefined && { package: input.package }),
    };
    let body;
    body = JSON.stringify({
        ...(input.expectedStatus !== undefined &&
            input.expectedStatus !== null && { expectedStatus: input.expectedStatus }),
        ...(input.targetStatus !== undefined && input.targetStatus !== null && { targetStatus: input.targetStatus }),
        ...(input.versionRevisions !== undefined &&
            input.versionRevisions !== null && {
            versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
        }),
        ...(input.versions !== undefined &&
            input.versions !== null && { versions: serializeAws_restJson1PackageVersionList(input.versions, context) }),
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
exports.serializeAws_restJson1UpdatePackageVersionsStatusCommand = serializeAws_restJson1UpdatePackageVersionsStatusCommand;
const serializeAws_restJson1UpdateRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/repository";
    const query = {
        ...(input.domain !== undefined && { domain: input.domain }),
        ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
        ...(input.repository !== undefined && { repository: input.repository }),
    };
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.upstreams !== undefined &&
            input.upstreams !== null && {
            upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
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
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateRepositoryCommand = serializeAws_restJson1UpdateRepositoryCommand;
const deserializeAws_restJson1AssociateExternalConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateExternalConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateExternalConnectionCommand = deserializeAws_restJson1AssociateExternalConnectionCommand;
const deserializeAws_restJson1AssociateExternalConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CopyPackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CopyPackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CopyPackageVersionsCommand = deserializeAws_restJson1CopyPackageVersionsCommand;
const deserializeAws_restJson1CopyPackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        domain: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
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
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRepositoryCommand = deserializeAws_restJson1CreateRepositoryCommand;
const deserializeAws_restJson1CreateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        domain: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
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
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand;
const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePackageVersionsCommand = deserializeAws_restJson1DeletePackageVersionsCommand;
const deserializeAws_restJson1DeletePackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRepositoryCommand = deserializeAws_restJson1DeleteRepositoryCommand;
const deserializeAws_restJson1DeleteRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        domain: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.domain !== undefined && data.domain !== null) {
        contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDomainCommand = deserializeAws_restJson1DescribeDomainCommand;
const deserializeAws_restJson1DescribeDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribePackageVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePackageVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        packageVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.packageVersion !== undefined && data.packageVersion !== null) {
        contents.packageVersion = deserializeAws_restJson1PackageVersionDescription(data.packageVersion, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePackageVersionCommand = deserializeAws_restJson1DescribePackageVersionCommand;
const deserializeAws_restJson1DescribePackageVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRepositoryCommand = deserializeAws_restJson1DescribeRepositoryCommand;
const deserializeAws_restJson1DescribeRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateExternalConnectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateExternalConnectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateExternalConnectionCommand = deserializeAws_restJson1DisassociateExternalConnectionCommand;
const deserializeAws_restJson1DisassociateExternalConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisposePackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisposePackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisposePackageVersionsCommand = deserializeAws_restJson1DisposePackageVersionsCommand;
const deserializeAws_restJson1DisposePackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAuthorizationTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAuthorizationTokenCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        authorizationToken: undefined,
        expiration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.authorizationToken !== undefined && data.authorizationToken !== null) {
        contents.authorizationToken = data.authorizationToken;
    }
    if (data.expiration !== undefined && data.expiration !== null) {
        contents.expiration = new Date(Math.round(data.expiration * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAuthorizationTokenCommand = deserializeAws_restJson1GetAuthorizationTokenCommand;
const deserializeAws_restJson1GetAuthorizationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainPermissionsPolicyCommand = deserializeAws_restJson1GetDomainPermissionsPolicyCommand;
const deserializeAws_restJson1GetDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPackageVersionAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPackageVersionAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        asset: undefined,
        assetName: undefined,
        packageVersion: undefined,
        packageVersionRevision: undefined,
    };
    if (output.headers["x-assetname"] !== undefined) {
        contents.assetName = output.headers["x-assetname"];
    }
    if (output.headers["x-packageversion"] !== undefined) {
        contents.packageVersion = output.headers["x-packageversion"];
    }
    if (output.headers["x-packageversionrevision"] !== undefined) {
        contents.packageVersionRevision = output.headers["x-packageversionrevision"];
    }
    const data = output.body;
    contents.asset = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPackageVersionAssetCommand = deserializeAws_restJson1GetPackageVersionAssetCommand;
const deserializeAws_restJson1GetPackageVersionAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPackageVersionReadmeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPackageVersionReadmeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        format: undefined,
        namespace: undefined,
        package: undefined,
        readme: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.format !== undefined && data.format !== null) {
        contents.format = data.format;
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = data.namespace;
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = data.package;
    }
    if (data.readme !== undefined && data.readme !== null) {
        contents.readme = data.readme;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = data.versionRevision;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPackageVersionReadmeCommand = deserializeAws_restJson1GetPackageVersionReadmeCommand;
const deserializeAws_restJson1GetPackageVersionReadmeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetRepositoryEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRepositoryEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repositoryEndpoint: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repositoryEndpoint !== undefined && data.repositoryEndpoint !== null) {
        contents.repositoryEndpoint = data.repositoryEndpoint;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRepositoryEndpointCommand = deserializeAws_restJson1GetRepositoryEndpointCommand;
const deserializeAws_restJson1GetRepositoryEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        domains: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.domains !== undefined && data.domains !== null) {
        contents.domains = deserializeAws_restJson1DomainSummaryList(data.domains, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
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
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        packages: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.packages !== undefined && data.packages !== null) {
        contents.packages = deserializeAws_restJson1PackageSummaryList(data.packages, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackagesCommand = deserializeAws_restJson1ListPackagesCommand;
const deserializeAws_restJson1ListPackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackageVersionAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        assets: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.assets !== undefined && data.assets !== null) {
        contents.assets = deserializeAws_restJson1AssetSummaryList(data.assets, context);
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = data.format;
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = data.namespace;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = data.package;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = data.versionRevision;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionAssetsCommand = deserializeAws_restJson1ListPackageVersionAssetsCommand;
const deserializeAws_restJson1ListPackageVersionAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackageVersionDependenciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionDependenciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dependencies: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        version: undefined,
        versionRevision: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dependencies !== undefined && data.dependencies !== null) {
        contents.dependencies = deserializeAws_restJson1PackageDependencyList(data.dependencies, context);
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = data.format;
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = data.namespace;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = data.package;
    }
    if (data.version !== undefined && data.version !== null) {
        contents.version = data.version;
    }
    if (data.versionRevision !== undefined && data.versionRevision !== null) {
        contents.versionRevision = data.versionRevision;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionDependenciesCommand = deserializeAws_restJson1ListPackageVersionDependenciesCommand;
const deserializeAws_restJson1ListPackageVersionDependenciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPackageVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPackageVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        defaultDisplayVersion: undefined,
        format: undefined,
        namespace: undefined,
        nextToken: undefined,
        package: undefined,
        versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.defaultDisplayVersion !== undefined && data.defaultDisplayVersion !== null) {
        contents.defaultDisplayVersion = data.defaultDisplayVersion;
    }
    if (data.format !== undefined && data.format !== null) {
        contents.format = data.format;
    }
    if (data.namespace !== undefined && data.namespace !== null) {
        contents.namespace = data.namespace;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.package !== undefined && data.package !== null) {
        contents.package = data.package;
    }
    if (data.versions !== undefined && data.versions !== null) {
        contents.versions = deserializeAws_restJson1PackageVersionSummaryList(data.versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPackageVersionsCommand = deserializeAws_restJson1ListPackageVersionsCommand;
const deserializeAws_restJson1ListPackageVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRepositoriesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRepositoriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        repositories: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.repositories !== undefined && data.repositories !== null) {
        contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRepositoriesCommand = deserializeAws_restJson1ListRepositoriesCommand;
const deserializeAws_restJson1ListRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRepositoriesInDomainCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRepositoriesInDomainCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        repositories: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.repositories !== undefined && data.repositories !== null) {
        contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRepositoriesInDomainCommand = deserializeAws_restJson1ListRepositoriesInDomainCommand;
const deserializeAws_restJson1ListRepositoriesInDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutDomainPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutDomainPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutDomainPermissionsPolicyCommand = deserializeAws_restJson1PutDomainPermissionsPolicyCommand;
const deserializeAws_restJson1PutDomainPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand;
const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePackageVersionsStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePackageVersionsStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        failedVersions: undefined,
        successfulVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.failedVersions !== undefined && data.failedVersions !== null) {
        contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
    }
    if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
        contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(data.successfulVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePackageVersionsStatusCommand = deserializeAws_restJson1UpdatePackageVersionsStatusCommand;
const deserializeAws_restJson1UpdatePackageVersionsStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        repository: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.repository !== undefined && data.repository !== null) {
        contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRepositoryCommand = deserializeAws_restJson1UpdateRepositoryCommand;
const deserializeAws_restJson1UpdateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codeartifact#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codeartifact#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeartifact#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeartifact#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeartifact#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeartifact#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.reason = data.reason;
    }
    return contents;
};
const serializeAws_restJson1PackageVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1PackageVersionRevisionMap = (input, context) => {
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
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1UpstreamRepository = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_restJson1UpstreamRepositoryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpstreamRepository(entry, context);
    });
};
const deserializeAws_restJson1AssetHashes = (output, context) => {
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
const deserializeAws_restJson1AssetSummary = (output, context) => {
    return {
        hashes: output.hashes !== undefined && output.hashes !== null
            ? deserializeAws_restJson1AssetHashes(output.hashes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        size: output.size !== undefined && output.size !== null ? output.size : undefined,
    };
};
const deserializeAws_restJson1AssetSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetSummary(entry, context);
    });
};
const deserializeAws_restJson1DomainDescription = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        assetSizeBytes: output.assetSizeBytes !== undefined && output.assetSizeBytes !== null ? output.assetSizeBytes : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null
            ? new Date(Math.round(output.createdTime * 1000))
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        repositoryCount: output.repositoryCount !== undefined && output.repositoryCount !== null ? output.repositoryCount : undefined,
        s3BucketArn: output.s3BucketArn !== undefined && output.s3BucketArn !== null ? output.s3BucketArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DomainSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null
            ? new Date(Math.round(output.createdTime * 1000))
            : undefined,
        encryptionKey: output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DomainSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainSummary(entry, context);
    });
};
const deserializeAws_restJson1LicenseInfo = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1LicenseInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LicenseInfo(entry, context);
    });
};
const deserializeAws_restJson1PackageDependency = (output, context) => {
    return {
        dependencyType: output.dependencyType !== undefined && output.dependencyType !== null ? output.dependencyType : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        package: output.package !== undefined && output.package !== null ? output.package : undefined,
        versionRequirement: output.versionRequirement !== undefined && output.versionRequirement !== null
            ? output.versionRequirement
            : undefined,
    };
};
const deserializeAws_restJson1PackageDependencyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageDependency(entry, context);
    });
};
const deserializeAws_restJson1PackageSummary = (output, context) => {
    return {
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        package: output.package !== undefined && output.package !== null ? output.package : undefined,
    };
};
const deserializeAws_restJson1PackageSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageSummary(entry, context);
    });
};
const deserializeAws_restJson1PackageVersionDescription = (output, context) => {
    return {
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        format: output.format !== undefined && output.format !== null ? output.format : undefined,
        homePage: output.homePage !== undefined && output.homePage !== null ? output.homePage : undefined,
        licenses: output.licenses !== undefined && output.licenses !== null
            ? deserializeAws_restJson1LicenseInfoList(output.licenses, context)
            : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        publishedTime: output.publishedTime !== undefined && output.publishedTime !== null
            ? new Date(Math.round(output.publishedTime * 1000))
            : undefined,
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
        sourceCodeRepository: output.sourceCodeRepository !== undefined && output.sourceCodeRepository !== null
            ? output.sourceCodeRepository
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1PackageVersionError = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
const deserializeAws_restJson1PackageVersionErrorMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1PackageVersionError(value, context),
        };
    }, {});
};
const deserializeAws_restJson1PackageVersionSummary = (output, context) => {
    return {
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1PackageVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1RepositoryDescription = (output, context) => {
    return {
        administratorAccount: output.administratorAccount !== undefined && output.administratorAccount !== null
            ? output.administratorAccount
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        domainOwner: output.domainOwner !== undefined && output.domainOwner !== null ? output.domainOwner : undefined,
        externalConnections: output.externalConnections !== undefined && output.externalConnections !== null
            ? deserializeAws_restJson1RepositoryExternalConnectionInfoList(output.externalConnections, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        upstreams: output.upstreams !== undefined && output.upstreams !== null
            ? deserializeAws_restJson1UpstreamRepositoryInfoList(output.upstreams, context)
            : undefined,
    };
};
const deserializeAws_restJson1RepositoryExternalConnectionInfo = (output, context) => {
    return {
        externalConnectionName: output.externalConnectionName !== undefined && output.externalConnectionName !== null
            ? output.externalConnectionName
            : undefined,
        packageFormat: output.packageFormat !== undefined && output.packageFormat !== null ? output.packageFormat : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1RepositoryExternalConnectionInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RepositoryExternalConnectionInfo(entry, context);
    });
};
const deserializeAws_restJson1RepositorySummary = (output, context) => {
    return {
        administratorAccount: output.administratorAccount !== undefined && output.administratorAccount !== null
            ? output.administratorAccount
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        domainOwner: output.domainOwner !== undefined && output.domainOwner !== null ? output.domainOwner : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1RepositorySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RepositorySummary(entry, context);
    });
};
const deserializeAws_restJson1ResourcePolicy = (output, context) => {
    return {
        document: output.document !== undefined && output.document !== null ? output.document : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
const deserializeAws_restJson1SuccessfulPackageVersionInfo = (output, context) => {
    return {
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1SuccessfulPackageVersionInfoMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1SuccessfulPackageVersionInfo(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1UpstreamRepositoryInfo = (output, context) => {
    return {
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_restJson1UpstreamRepositoryInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpstreamRepositoryInfo(entry, context);
    });
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