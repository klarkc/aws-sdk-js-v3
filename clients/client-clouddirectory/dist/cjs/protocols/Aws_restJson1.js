"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1ListPublishedSchemaArnsCommand =
  exports.serializeAws_restJson1ListPolicyAttachmentsCommand =
  exports.serializeAws_restJson1ListOutgoingTypedLinksCommand =
  exports.serializeAws_restJson1ListObjectPoliciesCommand =
  exports.serializeAws_restJson1ListObjectParentsCommand =
  exports.serializeAws_restJson1ListObjectParentPathsCommand =
  exports.serializeAws_restJson1ListObjectChildrenCommand =
  exports.serializeAws_restJson1ListObjectAttributesCommand =
  exports.serializeAws_restJson1ListManagedSchemaArnsCommand =
  exports.serializeAws_restJson1ListIndexCommand =
  exports.serializeAws_restJson1ListIncomingTypedLinksCommand =
  exports.serializeAws_restJson1ListFacetNamesCommand =
  exports.serializeAws_restJson1ListFacetAttributesCommand =
  exports.serializeAws_restJson1ListDirectoriesCommand =
  exports.serializeAws_restJson1ListDevelopmentSchemaArnsCommand =
  exports.serializeAws_restJson1ListAttachedIndicesCommand =
  exports.serializeAws_restJson1ListAppliedSchemaArnsCommand =
  exports.serializeAws_restJson1GetTypedLinkFacetInformationCommand =
  exports.serializeAws_restJson1GetSchemaAsJsonCommand =
  exports.serializeAws_restJson1GetObjectInformationCommand =
  exports.serializeAws_restJson1GetObjectAttributesCommand =
  exports.serializeAws_restJson1GetLinkAttributesCommand =
  exports.serializeAws_restJson1GetFacetCommand =
  exports.serializeAws_restJson1GetDirectoryCommand =
  exports.serializeAws_restJson1GetAppliedSchemaVersionCommand =
  exports.serializeAws_restJson1EnableDirectoryCommand =
  exports.serializeAws_restJson1DisableDirectoryCommand =
  exports.serializeAws_restJson1DetachTypedLinkCommand =
  exports.serializeAws_restJson1DetachPolicyCommand =
  exports.serializeAws_restJson1DetachObjectCommand =
  exports.serializeAws_restJson1DetachFromIndexCommand =
  exports.serializeAws_restJson1DeleteTypedLinkFacetCommand =
  exports.serializeAws_restJson1DeleteSchemaCommand =
  exports.serializeAws_restJson1DeleteObjectCommand =
  exports.serializeAws_restJson1DeleteFacetCommand =
  exports.serializeAws_restJson1DeleteDirectoryCommand =
  exports.serializeAws_restJson1CreateTypedLinkFacetCommand =
  exports.serializeAws_restJson1CreateSchemaCommand =
  exports.serializeAws_restJson1CreateObjectCommand =
  exports.serializeAws_restJson1CreateIndexCommand =
  exports.serializeAws_restJson1CreateFacetCommand =
  exports.serializeAws_restJson1CreateDirectoryCommand =
  exports.serializeAws_restJson1BatchWriteCommand =
  exports.serializeAws_restJson1BatchReadCommand =
  exports.serializeAws_restJson1AttachTypedLinkCommand =
  exports.serializeAws_restJson1AttachToIndexCommand =
  exports.serializeAws_restJson1AttachPolicyCommand =
  exports.serializeAws_restJson1AttachObjectCommand =
  exports.serializeAws_restJson1ApplySchemaCommand =
  exports.serializeAws_restJson1AddFacetToObjectCommand =
    void 0;
exports.deserializeAws_restJson1ListAppliedSchemaArnsCommand =
  exports.deserializeAws_restJson1GetTypedLinkFacetInformationCommand =
  exports.deserializeAws_restJson1GetSchemaAsJsonCommand =
  exports.deserializeAws_restJson1GetObjectInformationCommand =
  exports.deserializeAws_restJson1GetObjectAttributesCommand =
  exports.deserializeAws_restJson1GetLinkAttributesCommand =
  exports.deserializeAws_restJson1GetFacetCommand =
  exports.deserializeAws_restJson1GetDirectoryCommand =
  exports.deserializeAws_restJson1GetAppliedSchemaVersionCommand =
  exports.deserializeAws_restJson1EnableDirectoryCommand =
  exports.deserializeAws_restJson1DisableDirectoryCommand =
  exports.deserializeAws_restJson1DetachTypedLinkCommand =
  exports.deserializeAws_restJson1DetachPolicyCommand =
  exports.deserializeAws_restJson1DetachObjectCommand =
  exports.deserializeAws_restJson1DetachFromIndexCommand =
  exports.deserializeAws_restJson1DeleteTypedLinkFacetCommand =
  exports.deserializeAws_restJson1DeleteSchemaCommand =
  exports.deserializeAws_restJson1DeleteObjectCommand =
  exports.deserializeAws_restJson1DeleteFacetCommand =
  exports.deserializeAws_restJson1DeleteDirectoryCommand =
  exports.deserializeAws_restJson1CreateTypedLinkFacetCommand =
  exports.deserializeAws_restJson1CreateSchemaCommand =
  exports.deserializeAws_restJson1CreateObjectCommand =
  exports.deserializeAws_restJson1CreateIndexCommand =
  exports.deserializeAws_restJson1CreateFacetCommand =
  exports.deserializeAws_restJson1CreateDirectoryCommand =
  exports.deserializeAws_restJson1BatchWriteCommand =
  exports.deserializeAws_restJson1BatchReadCommand =
  exports.deserializeAws_restJson1AttachTypedLinkCommand =
  exports.deserializeAws_restJson1AttachToIndexCommand =
  exports.deserializeAws_restJson1AttachPolicyCommand =
  exports.deserializeAws_restJson1AttachObjectCommand =
  exports.deserializeAws_restJson1ApplySchemaCommand =
  exports.deserializeAws_restJson1AddFacetToObjectCommand =
  exports.serializeAws_restJson1UpgradePublishedSchemaCommand =
  exports.serializeAws_restJson1UpgradeAppliedSchemaCommand =
  exports.serializeAws_restJson1UpdateTypedLinkFacetCommand =
  exports.serializeAws_restJson1UpdateSchemaCommand =
  exports.serializeAws_restJson1UpdateObjectAttributesCommand =
  exports.serializeAws_restJson1UpdateLinkAttributesCommand =
  exports.serializeAws_restJson1UpdateFacetCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1RemoveFacetFromObjectCommand =
  exports.serializeAws_restJson1PutSchemaFromJsonCommand =
  exports.serializeAws_restJson1PublishSchemaCommand =
  exports.serializeAws_restJson1LookupPolicyCommand =
  exports.serializeAws_restJson1ListTypedLinkFacetNamesCommand =
  exports.serializeAws_restJson1ListTypedLinkFacetAttributesCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
    void 0;
exports.deserializeAws_restJson1UpgradePublishedSchemaCommand =
  exports.deserializeAws_restJson1UpgradeAppliedSchemaCommand =
  exports.deserializeAws_restJson1UpdateTypedLinkFacetCommand =
  exports.deserializeAws_restJson1UpdateSchemaCommand =
  exports.deserializeAws_restJson1UpdateObjectAttributesCommand =
  exports.deserializeAws_restJson1UpdateLinkAttributesCommand =
  exports.deserializeAws_restJson1UpdateFacetCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1RemoveFacetFromObjectCommand =
  exports.deserializeAws_restJson1PutSchemaFromJsonCommand =
  exports.deserializeAws_restJson1PublishSchemaCommand =
  exports.deserializeAws_restJson1LookupPolicyCommand =
  exports.deserializeAws_restJson1ListTypedLinkFacetNamesCommand =
  exports.deserializeAws_restJson1ListTypedLinkFacetAttributesCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListPublishedSchemaArnsCommand =
  exports.deserializeAws_restJson1ListPolicyAttachmentsCommand =
  exports.deserializeAws_restJson1ListOutgoingTypedLinksCommand =
  exports.deserializeAws_restJson1ListObjectPoliciesCommand =
  exports.deserializeAws_restJson1ListObjectParentsCommand =
  exports.deserializeAws_restJson1ListObjectParentPathsCommand =
  exports.deserializeAws_restJson1ListObjectChildrenCommand =
  exports.deserializeAws_restJson1ListObjectAttributesCommand =
  exports.deserializeAws_restJson1ListManagedSchemaArnsCommand =
  exports.deserializeAws_restJson1ListIndexCommand =
  exports.deserializeAws_restJson1ListIncomingTypedLinksCommand =
  exports.deserializeAws_restJson1ListFacetNamesCommand =
  exports.deserializeAws_restJson1ListFacetAttributesCommand =
  exports.deserializeAws_restJson1ListDirectoriesCommand =
  exports.deserializeAws_restJson1ListDevelopmentSchemaArnsCommand =
  exports.deserializeAws_restJson1ListAttachedIndicesCommand =
    void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1AddFacetToObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets";
  let body;
  body = JSON.stringify({
    ...(input.ObjectAttributeList !== undefined &&
      input.ObjectAttributeList !== null && {
        ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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
exports.serializeAws_restJson1AddFacetToObjectCommand = serializeAws_restJson1AddFacetToObjectCommand;
const serializeAws_restJson1ApplySchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/apply";
  let body;
  body = JSON.stringify({
    ...(input.PublishedSchemaArn !== undefined &&
      input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }),
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
exports.serializeAws_restJson1ApplySchemaCommand = serializeAws_restJson1ApplySchemaCommand;
const serializeAws_restJson1AttachObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attach";
  let body;
  body = JSON.stringify({
    ...(input.ChildReference !== undefined &&
      input.ChildReference !== null && {
        ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
      }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
exports.serializeAws_restJson1AttachObjectCommand = serializeAws_restJson1AttachObjectCommand;
const serializeAws_restJson1AttachPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attach";
  let body;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
exports.serializeAws_restJson1AttachPolicyCommand = serializeAws_restJson1AttachPolicyCommand;
const serializeAws_restJson1AttachToIndexCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/attach";
  let body;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
exports.serializeAws_restJson1AttachToIndexCommand = serializeAws_restJson1AttachToIndexCommand;
const serializeAws_restJson1AttachTypedLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attach";
  let body;
  body = JSON.stringify({
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
      }),
    ...(input.SourceObjectReference !== undefined &&
      input.SourceObjectReference !== null && {
        SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
      }),
    ...(input.TargetObjectReference !== undefined &&
      input.TargetObjectReference !== null && {
        TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
      }),
    ...(input.TypedLinkFacet !== undefined &&
      input.TypedLinkFacet !== null && {
        TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
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
exports.serializeAws_restJson1AttachTypedLinkCommand = serializeAws_restJson1AttachTypedLinkCommand;
const serializeAws_restJson1BatchReadCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchread";
  let body;
  body = JSON.stringify({
    ...(input.Operations !== undefined &&
      input.Operations !== null && {
        Operations: serializeAws_restJson1BatchReadOperationList(input.Operations, context),
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
exports.serializeAws_restJson1BatchReadCommand = serializeAws_restJson1BatchReadCommand;
const serializeAws_restJson1BatchWriteCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/batchwrite";
  let body;
  body = JSON.stringify({
    ...(input.Operations !== undefined &&
      input.Operations !== null && {
        Operations: serializeAws_restJson1BatchWriteOperationList(input.Operations, context),
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
exports.serializeAws_restJson1BatchWriteCommand = serializeAws_restJson1BatchWriteCommand;
const serializeAws_restJson1CreateDirectoryCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/create";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateDirectoryCommand = serializeAws_restJson1CreateDirectoryCommand;
const serializeAws_restJson1CreateFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/create";
  let body;
  body = JSON.stringify({
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1FacetAttributeList(input.Attributes, context) }),
    ...(input.FacetStyle !== undefined && input.FacetStyle !== null && { FacetStyle: input.FacetStyle }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ObjectType !== undefined && input.ObjectType !== null && { ObjectType: input.ObjectType }),
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
exports.serializeAws_restJson1CreateFacetCommand = serializeAws_restJson1CreateFacetCommand;
const serializeAws_restJson1CreateIndexCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index";
  let body;
  body = JSON.stringify({
    ...(input.IsUnique !== undefined && input.IsUnique !== null && { IsUnique: input.IsUnique }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList !== undefined &&
      input.OrderedIndexedAttributeList !== null && {
        OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(input.OrderedIndexedAttributeList, context),
      }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
exports.serializeAws_restJson1CreateIndexCommand = serializeAws_restJson1CreateIndexCommand;
const serializeAws_restJson1CreateObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object";
  let body;
  body = JSON.stringify({
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList !== undefined &&
      input.ObjectAttributeList !== null && {
        ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
      }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }),
    ...(input.SchemaFacets !== undefined &&
      input.SchemaFacets !== null && {
        SchemaFacets: serializeAws_restJson1SchemaFacetList(input.SchemaFacets, context),
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
exports.serializeAws_restJson1CreateObjectCommand = serializeAws_restJson1CreateObjectCommand;
const serializeAws_restJson1CreateSchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/create";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1CreateSchemaCommand = serializeAws_restJson1CreateSchemaCommand;
const serializeAws_restJson1CreateTypedLinkFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/create";
  let body;
  body = JSON.stringify({
    ...(input.Facet !== undefined &&
      input.Facet !== null && { Facet: serializeAws_restJson1TypedLinkFacet(input.Facet, context) }),
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
exports.serializeAws_restJson1CreateTypedLinkFacetCommand = serializeAws_restJson1CreateTypedLinkFacetCommand;
const serializeAws_restJson1DeleteDirectoryCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory";
  let body;
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
exports.serializeAws_restJson1DeleteDirectoryCommand = serializeAws_restJson1DeleteDirectoryCommand;
const serializeAws_restJson1DeleteFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/delete";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1DeleteFacetCommand = serializeAws_restJson1DeleteFacetCommand;
const serializeAws_restJson1DeleteObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/delete";
  let body;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1DeleteObjectCommand = serializeAws_restJson1DeleteObjectCommand;
const serializeAws_restJson1DeleteSchemaCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema";
  let body;
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
exports.serializeAws_restJson1DeleteSchemaCommand = serializeAws_restJson1DeleteSchemaCommand;
const serializeAws_restJson1DeleteTypedLinkFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/delete";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1DeleteTypedLinkFacetCommand = serializeAws_restJson1DeleteTypedLinkFacetCommand;
const serializeAws_restJson1DetachFromIndexCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/detach";
  let body;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
exports.serializeAws_restJson1DetachFromIndexCommand = serializeAws_restJson1DetachFromIndexCommand;
const serializeAws_restJson1DetachObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/detach";
  let body;
  body = JSON.stringify({
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
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
exports.serializeAws_restJson1DetachObjectCommand = serializeAws_restJson1DetachObjectCommand;
const serializeAws_restJson1DetachPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/detach";
  let body;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
exports.serializeAws_restJson1DetachPolicyCommand = serializeAws_restJson1DetachPolicyCommand;
const serializeAws_restJson1DetachTypedLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/detach";
  let body;
  body = JSON.stringify({
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
exports.serializeAws_restJson1DetachTypedLinkCommand = serializeAws_restJson1DetachTypedLinkCommand;
const serializeAws_restJson1DisableDirectoryCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/disable";
  let body;
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
exports.serializeAws_restJson1DisableDirectoryCommand = serializeAws_restJson1DisableDirectoryCommand;
const serializeAws_restJson1EnableDirectoryCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/enable";
  let body;
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
exports.serializeAws_restJson1EnableDirectoryCommand = serializeAws_restJson1EnableDirectoryCommand;
const serializeAws_restJson1GetAppliedSchemaVersionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
  let body;
  body = JSON.stringify({
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
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
exports.serializeAws_restJson1GetAppliedSchemaVersionCommand = serializeAws_restJson1GetAppliedSchemaVersionCommand;
const serializeAws_restJson1GetDirectoryCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/get";
  let body;
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
exports.serializeAws_restJson1GetDirectoryCommand = serializeAws_restJson1GetDirectoryCommand;
const serializeAws_restJson1GetFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1GetFacetCommand = serializeAws_restJson1GetFacetCommand;
const serializeAws_restJson1GetLinkAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attributes/get";
  let body;
  body = JSON.stringify({
    ...(input.AttributeNames !== undefined &&
      input.AttributeNames !== null && {
        AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
      }),
    ...(input.ConsistencyLevel !== undefined &&
      input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
exports.serializeAws_restJson1GetLinkAttributesCommand = serializeAws_restJson1GetLinkAttributesCommand;
const serializeAws_restJson1GetObjectAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes/get";
  let body;
  body = JSON.stringify({
    ...(input.AttributeNames !== undefined &&
      input.AttributeNames !== null && {
        AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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
exports.serializeAws_restJson1GetObjectAttributesCommand = serializeAws_restJson1GetObjectAttributesCommand;
const serializeAws_restJson1GetObjectInformationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/information";
  let body;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1GetObjectInformationCommand = serializeAws_restJson1GetObjectInformationCommand;
const serializeAws_restJson1GetSchemaAsJsonCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  let body;
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
exports.serializeAws_restJson1GetSchemaAsJsonCommand = serializeAws_restJson1GetSchemaAsJsonCommand;
const serializeAws_restJson1GetTypedLinkFacetInformationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/get";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1GetTypedLinkFacetInformationCommand =
  serializeAws_restJson1GetTypedLinkFacetInformationCommand;
const serializeAws_restJson1ListAppliedSchemaArnsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/applied";
  let body;
  body = JSON.stringify({
    ...(input.DirectoryArn !== undefined && input.DirectoryArn !== null && { DirectoryArn: input.DirectoryArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
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
exports.serializeAws_restJson1ListAppliedSchemaArnsCommand = serializeAws_restJson1ListAppliedSchemaArnsCommand;
const serializeAws_restJson1ListAttachedIndicesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/indices";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
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
exports.serializeAws_restJson1ListAttachedIndicesCommand = serializeAws_restJson1ListAttachedIndicesCommand;
const serializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/development";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListDevelopmentSchemaArnsCommand = serializeAws_restJson1ListDevelopmentSchemaArnsCommand;
const serializeAws_restJson1ListDirectoriesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/directory/list";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
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
exports.serializeAws_restJson1ListDirectoriesCommand = serializeAws_restJson1ListDirectoriesCommand;
const serializeAws_restJson1ListFacetAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/attributes";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListFacetAttributesCommand = serializeAws_restJson1ListFacetAttributesCommand;
const serializeAws_restJson1ListFacetNamesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet/list";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListFacetNamesCommand = serializeAws_restJson1ListFacetNamesCommand;
const serializeAws_restJson1ListIncomingTypedLinksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/incoming";
  let body;
  body = JSON.stringify({
    ...(input.ConsistencyLevel !== undefined &&
      input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.FilterAttributeRanges !== undefined &&
      input.FilterAttributeRanges !== null && {
        FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
      }),
    ...(input.FilterTypedLink !== undefined &&
      input.FilterTypedLink !== null && {
        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListIncomingTypedLinksCommand = serializeAws_restJson1ListIncomingTypedLinksCommand;
const serializeAws_restJson1ListIndexCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/index/targets";
  let body;
  body = JSON.stringify({
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues !== undefined &&
      input.RangesOnIndexedValues !== null && {
        RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
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
exports.serializeAws_restJson1ListIndexCommand = serializeAws_restJson1ListIndexCommand;
const serializeAws_restJson1ListManagedSchemaArnsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/managed";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
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
exports.serializeAws_restJson1ListManagedSchemaArnsCommand = serializeAws_restJson1ListManagedSchemaArnsCommand;
const serializeAws_restJson1ListObjectAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/attributes";
  let body;
  body = JSON.stringify({
    ...(input.FacetFilter !== undefined &&
      input.FacetFilter !== null && { FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListObjectAttributesCommand = serializeAws_restJson1ListObjectAttributesCommand;
const serializeAws_restJson1ListObjectChildrenCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/children";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListObjectChildrenCommand = serializeAws_restJson1ListObjectChildrenCommand;
const serializeAws_restJson1ListObjectParentPathsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parentpaths";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListObjectParentPathsCommand = serializeAws_restJson1ListObjectParentPathsCommand;
const serializeAws_restJson1ListObjectParentsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/parent";
  let body;
  body = JSON.stringify({
    ...(input.IncludeAllLinksToEachParent !== undefined &&
      input.IncludeAllLinksToEachParent !== null && { IncludeAllLinksToEachParent: input.IncludeAllLinksToEachParent }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListObjectParentsCommand = serializeAws_restJson1ListObjectParentsCommand;
const serializeAws_restJson1ListObjectPoliciesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/policy";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListObjectPoliciesCommand = serializeAws_restJson1ListObjectPoliciesCommand;
const serializeAws_restJson1ListOutgoingTypedLinksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/outgoing";
  let body;
  body = JSON.stringify({
    ...(input.ConsistencyLevel !== undefined &&
      input.ConsistencyLevel !== null && { ConsistencyLevel: input.ConsistencyLevel }),
    ...(input.FilterAttributeRanges !== undefined &&
      input.FilterAttributeRanges !== null && {
        FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
      }),
    ...(input.FilterTypedLink !== undefined &&
      input.FilterTypedLink !== null && {
        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1ListOutgoingTypedLinksCommand = serializeAws_restJson1ListOutgoingTypedLinksCommand;
const serializeAws_restJson1ListPolicyAttachmentsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
    ...(isSerializableHeaderValue(input.ConsistencyLevel) && { "x-amz-consistency-level": input.ConsistencyLevel }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/attachment";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
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
exports.serializeAws_restJson1ListPolicyAttachmentsCommand = serializeAws_restJson1ListPolicyAttachmentsCommand;
const serializeAws_restJson1ListPublishedSchemaArnsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/published";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
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
exports.serializeAws_restJson1ListPublishedSchemaArnsCommand = serializeAws_restJson1ListPublishedSchemaArnsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListTypedLinkFacetAttributesCommand =
  serializeAws_restJson1ListTypedLinkFacetAttributesCommand;
const serializeAws_restJson1ListTypedLinkFacetNamesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet/list";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListTypedLinkFacetNamesCommand = serializeAws_restJson1ListTypedLinkFacetNamesCommand;
const serializeAws_restJson1LookupPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/policy/lookup";
  let body;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1LookupPolicyCommand = serializeAws_restJson1LookupPolicyCommand;
const serializeAws_restJson1PublishSchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DevelopmentSchemaArn) && {
      "x-amz-data-partition": input.DevelopmentSchemaArn,
    }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/publish";
  let body;
  body = JSON.stringify({
    ...(input.MinorVersion !== undefined && input.MinorVersion !== null && { MinorVersion: input.MinorVersion }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
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
exports.serializeAws_restJson1PublishSchemaCommand = serializeAws_restJson1PublishSchemaCommand;
const serializeAws_restJson1PutSchemaFromJsonCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/json";
  let body;
  body = JSON.stringify({
    ...(input.Document !== undefined && input.Document !== null && { Document: input.Document }),
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
exports.serializeAws_restJson1PutSchemaFromJsonCommand = serializeAws_restJson1PutSchemaFromJsonCommand;
const serializeAws_restJson1RemoveFacetFromObjectCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/facets/delete";
  let body;
  body = JSON.stringify({
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
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
exports.serializeAws_restJson1RemoveFacetFromObjectCommand = serializeAws_restJson1RemoveFacetFromObjectCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/add";
  let body;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/tags/remove";
  let body;
  body = JSON.stringify({
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/facet";
  let body;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1FacetAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ObjectType !== undefined && input.ObjectType !== null && { ObjectType: input.ObjectType }),
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
exports.serializeAws_restJson1UpdateFacetCommand = serializeAws_restJson1UpdateFacetCommand;
const serializeAws_restJson1UpdateLinkAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/attributes/update";
  let body;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
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
exports.serializeAws_restJson1UpdateLinkAttributesCommand = serializeAws_restJson1UpdateLinkAttributesCommand;
const serializeAws_restJson1UpdateObjectAttributesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.DirectoryArn) && { "x-amz-data-partition": input.DirectoryArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/object/update";
  let body;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
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
exports.serializeAws_restJson1UpdateObjectAttributesCommand = serializeAws_restJson1UpdateObjectAttributesCommand;
const serializeAws_restJson1UpdateSchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/update";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateSchemaCommand = serializeAws_restJson1UpdateSchemaCommand;
const serializeAws_restJson1UpdateTypedLinkFacetCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.SchemaArn) && { "x-amz-data-partition": input.SchemaArn }),
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/typedlink/facet";
  let body;
  body = JSON.stringify({
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1TypedLinkFacetAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.IdentityAttributeOrder !== undefined &&
      input.IdentityAttributeOrder !== null && {
        IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(input.IdentityAttributeOrder, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateTypedLinkFacetCommand = serializeAws_restJson1UpdateTypedLinkFacetCommand;
const serializeAws_restJson1UpgradeAppliedSchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
  let body;
  body = JSON.stringify({
    ...(input.DirectoryArn !== undefined && input.DirectoryArn !== null && { DirectoryArn: input.DirectoryArn }),
    ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
    ...(input.PublishedSchemaArn !== undefined &&
      input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }),
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
exports.serializeAws_restJson1UpgradeAppliedSchemaCommand = serializeAws_restJson1UpgradeAppliedSchemaCommand;
const serializeAws_restJson1UpgradePublishedSchemaCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
  let body;
  body = JSON.stringify({
    ...(input.DevelopmentSchemaArn !== undefined &&
      input.DevelopmentSchemaArn !== null && { DevelopmentSchemaArn: input.DevelopmentSchemaArn }),
    ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
    ...(input.MinorVersion !== undefined && input.MinorVersion !== null && { MinorVersion: input.MinorVersion }),
    ...(input.PublishedSchemaArn !== undefined &&
      input.PublishedSchemaArn !== null && { PublishedSchemaArn: input.PublishedSchemaArn }),
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
exports.serializeAws_restJson1UpgradePublishedSchemaCommand = serializeAws_restJson1UpgradePublishedSchemaCommand;
const deserializeAws_restJson1AddFacetToObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddFacetToObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddFacetToObjectCommand = deserializeAws_restJson1AddFacetToObjectCommand;
const deserializeAws_restJson1AddFacetToObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ApplySchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ApplySchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ApplySchemaCommand = deserializeAws_restJson1ApplySchemaCommand;
const deserializeAws_restJson1ApplySchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1AttachObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AttachedObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AttachedObjectIdentifier !== undefined && data.AttachedObjectIdentifier !== null) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AttachObjectCommand = deserializeAws_restJson1AttachObjectCommand;
const deserializeAws_restJson1AttachObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1AttachPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AttachPolicyCommand = deserializeAws_restJson1AttachPolicyCommand;
const deserializeAws_restJson1AttachPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1AttachToIndexCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachToIndexCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AttachedObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AttachedObjectIdentifier !== undefined && data.AttachedObjectIdentifier !== null) {
    contents.AttachedObjectIdentifier = data.AttachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AttachToIndexCommand = deserializeAws_restJson1AttachToIndexCommand;
const deserializeAws_restJson1AttachToIndexCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IndexedAttributeMissingException":
    case "com.amazonaws.clouddirectory#IndexedAttributeMissingException":
      response = {
        ...(await deserializeAws_restJson1IndexedAttributeMissingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1AttachTypedLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AttachTypedLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    TypedLinkSpecifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.TypedLinkSpecifier !== undefined && data.TypedLinkSpecifier !== null) {
    contents.TypedLinkSpecifier = deserializeAws_restJson1TypedLinkSpecifier(data.TypedLinkSpecifier, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AttachTypedLinkCommand = deserializeAws_restJson1AttachTypedLinkCommand;
const deserializeAws_restJson1AttachTypedLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1BatchReadCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchReadCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Responses: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Responses !== undefined && data.Responses !== null) {
    contents.Responses = deserializeAws_restJson1BatchReadOperationResponseList(data.Responses, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchReadCommand = deserializeAws_restJson1BatchReadCommand;
const deserializeAws_restJson1BatchReadCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1BatchWriteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchWriteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Responses: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Responses !== undefined && data.Responses !== null) {
    contents.Responses = deserializeAws_restJson1BatchWriteOperationResponseList(data.Responses, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchWriteCommand = deserializeAws_restJson1BatchWriteCommand;
const deserializeAws_restJson1BatchWriteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchWriteException":
    case "com.amazonaws.clouddirectory#BatchWriteException":
      response = {
        ...(await deserializeAws_restJson1BatchWriteExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateDirectoryCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDirectoryCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppliedSchemaArn: undefined,
    DirectoryArn: undefined,
    Name: undefined,
    ObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDirectoryCommand = deserializeAws_restJson1CreateDirectoryCommand;
const deserializeAws_restJson1CreateDirectoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryAlreadyExistsException":
    case "com.amazonaws.clouddirectory#DirectoryAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFacetCommand = deserializeAws_restJson1CreateFacetCommand;
const deserializeAws_restJson1CreateFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateIndexCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIndexCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIndexCommand = deserializeAws_restJson1CreateIndexCommand;
const deserializeAws_restJson1CreateIndexCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateObjectCommand = deserializeAws_restJson1CreateObjectCommand;
const deserializeAws_restJson1CreateObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedIndexTypeException":
    case "com.amazonaws.clouddirectory#UnsupportedIndexTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    SchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSchemaCommand = deserializeAws_restJson1CreateSchemaCommand;
const deserializeAws_restJson1CreateSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1CreateTypedLinkFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTypedLinkFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTypedLinkFacetCommand = deserializeAws_restJson1CreateTypedLinkFacetCommand;
const deserializeAws_restJson1CreateTypedLinkFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetAlreadyExistsException":
    case "com.amazonaws.clouddirectory#FacetAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1FacetAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DeleteDirectoryCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDirectoryCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DirectoryArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDirectoryCommand = deserializeAws_restJson1DeleteDirectoryCommand;
const deserializeAws_restJson1DeleteDirectoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotDisabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotDisabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DeleteFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFacetCommand = deserializeAws_restJson1DeleteFacetCommand;
const deserializeAws_restJson1DeleteFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetInUseException":
    case "com.amazonaws.clouddirectory#FacetInUseException":
      response = {
        ...(await deserializeAws_restJson1FacetInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DeleteObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteObjectCommand = deserializeAws_restJson1DeleteObjectCommand;
const deserializeAws_restJson1DeleteObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotDetachedException":
    case "com.amazonaws.clouddirectory#ObjectNotDetachedException":
      response = {
        ...(await deserializeAws_restJson1ObjectNotDetachedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DeleteSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    SchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSchemaCommand = deserializeAws_restJson1DeleteSchemaCommand;
const deserializeAws_restJson1DeleteSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StillContainsLinksException":
    case "com.amazonaws.clouddirectory#StillContainsLinksException":
      response = {
        ...(await deserializeAws_restJson1StillContainsLinksExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DeleteTypedLinkFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTypedLinkFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTypedLinkFacetCommand = deserializeAws_restJson1DeleteTypedLinkFacetCommand;
const deserializeAws_restJson1DeleteTypedLinkFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DetachFromIndexCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachFromIndexCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DetachedObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DetachedObjectIdentifier !== undefined && data.DetachedObjectIdentifier !== null) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DetachFromIndexCommand = deserializeAws_restJson1DetachFromIndexCommand;
const deserializeAws_restJson1DetachFromIndexCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectAlreadyDetachedException":
    case "com.amazonaws.clouddirectory#ObjectAlreadyDetachedException":
      response = {
        ...(await deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DetachObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DetachedObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DetachedObjectIdentifier !== undefined && data.DetachedObjectIdentifier !== null) {
    contents.DetachedObjectIdentifier = data.DetachedObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DetachObjectCommand = deserializeAws_restJson1DetachObjectCommand;
const deserializeAws_restJson1DetachObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      response = {
        ...(await deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DetachPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DetachPolicyCommand = deserializeAws_restJson1DetachPolicyCommand;
const deserializeAws_restJson1DetachPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DetachTypedLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetachTypedLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DetachTypedLinkCommand = deserializeAws_restJson1DetachTypedLinkCommand;
const deserializeAws_restJson1DetachTypedLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1DisableDirectoryCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableDirectoryCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DirectoryArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisableDirectoryCommand = deserializeAws_restJson1DisableDirectoryCommand;
const deserializeAws_restJson1DisableDirectoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1EnableDirectoryCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableDirectoryCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DirectoryArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1EnableDirectoryCommand = deserializeAws_restJson1EnableDirectoryCommand;
const deserializeAws_restJson1EnableDirectoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDeletedException":
    case "com.amazonaws.clouddirectory#DirectoryDeletedException":
      response = {
        ...(await deserializeAws_restJson1DirectoryDeletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetAppliedSchemaVersionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppliedSchemaVersionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppliedSchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AppliedSchemaArn !== undefined && data.AppliedSchemaArn !== null) {
    contents.AppliedSchemaArn = data.AppliedSchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAppliedSchemaVersionCommand = deserializeAws_restJson1GetAppliedSchemaVersionCommand;
const deserializeAws_restJson1GetAppliedSchemaVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetDirectoryCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDirectoryCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Directory: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Directory !== undefined && data.Directory !== null) {
    contents.Directory = deserializeAws_restJson1Directory(data.Directory, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDirectoryCommand = deserializeAws_restJson1GetDirectoryCommand;
const deserializeAws_restJson1GetDirectoryCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Facet: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Facet !== undefined && data.Facet !== null) {
    contents.Facet = deserializeAws_restJson1Facet(data.Facet, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFacetCommand = deserializeAws_restJson1GetFacetCommand;
const deserializeAws_restJson1GetFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetLinkAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLinkAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLinkAttributesCommand = deserializeAws_restJson1GetLinkAttributesCommand;
const deserializeAws_restJson1GetLinkAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetObjectAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetObjectAttributesCommand = deserializeAws_restJson1GetObjectAttributesCommand;
const deserializeAws_restJson1GetObjectAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetObjectInformationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectInformationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ObjectIdentifier: undefined,
    SchemaFacets: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  if (data.SchemaFacets !== undefined && data.SchemaFacets !== null) {
    contents.SchemaFacets = deserializeAws_restJson1SchemaFacetList(data.SchemaFacets, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetObjectInformationCommand = deserializeAws_restJson1GetObjectInformationCommand;
const deserializeAws_restJson1GetObjectInformationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetSchemaAsJsonCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaAsJsonCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Document: undefined,
    Name: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Document !== undefined && data.Document !== null) {
    contents.Document = data.Document;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSchemaAsJsonCommand = deserializeAws_restJson1GetSchemaAsJsonCommand;
const deserializeAws_restJson1GetSchemaAsJsonCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1GetTypedLinkFacetInformationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTypedLinkFacetInformationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    IdentityAttributeOrder: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.IdentityAttributeOrder !== undefined && data.IdentityAttributeOrder !== null) {
    contents.IdentityAttributeOrder = deserializeAws_restJson1AttributeNameList(data.IdentityAttributeOrder, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTypedLinkFacetInformationCommand =
  deserializeAws_restJson1GetTypedLinkFacetInformationCommand;
const deserializeAws_restJson1GetTypedLinkFacetInformationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListAppliedSchemaArnsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppliedSchemaArnsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SchemaArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAppliedSchemaArnsCommand = deserializeAws_restJson1ListAppliedSchemaArnsCommand;
const deserializeAws_restJson1ListAppliedSchemaArnsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListAttachedIndicesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttachedIndicesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    IndexAttachments: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAttachedIndicesCommand = deserializeAws_restJson1ListAttachedIndicesCommand;
const deserializeAws_restJson1ListAttachedIndicesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListDevelopmentSchemaArnsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SchemaArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDevelopmentSchemaArnsCommand =
  deserializeAws_restJson1ListDevelopmentSchemaArnsCommand;
const deserializeAws_restJson1ListDevelopmentSchemaArnsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListDirectoriesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDirectoriesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Directories: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Directories !== undefined && data.Directories !== null) {
    contents.Directories = deserializeAws_restJson1DirectoryList(data.Directories, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDirectoriesCommand = deserializeAws_restJson1ListDirectoriesCommand;
const deserializeAws_restJson1ListDirectoriesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListFacetAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFacetAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1FacetAttributeList(data.Attributes, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFacetAttributesCommand = deserializeAws_restJson1ListFacetAttributesCommand;
const deserializeAws_restJson1ListFacetAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListFacetNamesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFacetNamesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FacetNames: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.FacetNames !== undefined && data.FacetNames !== null) {
    contents.FacetNames = deserializeAws_restJson1FacetNameList(data.FacetNames, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFacetNamesCommand = deserializeAws_restJson1ListFacetNamesCommand;
const deserializeAws_restJson1ListFacetNamesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListIncomingTypedLinksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIncomingTypedLinksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    LinkSpecifiers: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.LinkSpecifiers !== undefined && data.LinkSpecifiers !== null) {
    contents.LinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(data.LinkSpecifiers, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIncomingTypedLinksCommand = deserializeAws_restJson1ListIncomingTypedLinksCommand;
const deserializeAws_restJson1ListIncomingTypedLinksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListIndexCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIndexCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    IndexAttachments: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.IndexAttachments !== undefined && data.IndexAttachments !== null) {
    contents.IndexAttachments = deserializeAws_restJson1IndexAttachmentList(data.IndexAttachments, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIndexCommand = deserializeAws_restJson1ListIndexCommand;
const deserializeAws_restJson1ListIndexCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotIndexException":
    case "com.amazonaws.clouddirectory#NotIndexException":
      response = {
        ...(await deserializeAws_restJson1NotIndexExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListManagedSchemaArnsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListManagedSchemaArnsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SchemaArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListManagedSchemaArnsCommand = deserializeAws_restJson1ListManagedSchemaArnsCommand;
const deserializeAws_restJson1ListManagedSchemaArnsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListObjectAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1AttributeKeyAndValueList(data.Attributes, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListObjectAttributesCommand = deserializeAws_restJson1ListObjectAttributesCommand;
const deserializeAws_restJson1ListObjectAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListObjectChildrenCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectChildrenCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Children: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Children !== undefined && data.Children !== null) {
    contents.Children = deserializeAws_restJson1LinkNameToObjectIdentifierMap(data.Children, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListObjectChildrenCommand = deserializeAws_restJson1ListObjectChildrenCommand;
const deserializeAws_restJson1ListObjectChildrenCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotNodeException":
    case "com.amazonaws.clouddirectory#NotNodeException":
      response = {
        ...(await deserializeAws_restJson1NotNodeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListObjectParentPathsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectParentPathsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PathToObjectIdentifiersList: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.PathToObjectIdentifiersList !== undefined && data.PathToObjectIdentifiersList !== null) {
    contents.PathToObjectIdentifiersList = deserializeAws_restJson1PathToObjectIdentifiersList(
      data.PathToObjectIdentifiersList,
      context
    );
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListObjectParentPathsCommand = deserializeAws_restJson1ListObjectParentPathsCommand;
const deserializeAws_restJson1ListObjectParentPathsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListObjectParentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectParentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ParentLinks: undefined,
    Parents: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ParentLinks !== undefined && data.ParentLinks !== null) {
    contents.ParentLinks = deserializeAws_restJson1ObjectIdentifierAndLinkNameList(data.ParentLinks, context);
  }
  if (data.Parents !== undefined && data.Parents !== null) {
    contents.Parents = deserializeAws_restJson1ObjectIdentifierToLinkNameMap(data.Parents, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListObjectParentsCommand = deserializeAws_restJson1ListObjectParentsCommand;
const deserializeAws_restJson1ListObjectParentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CannotListParentOfRootException":
    case "com.amazonaws.clouddirectory#CannotListParentOfRootException":
      response = {
        ...(await deserializeAws_restJson1CannotListParentOfRootExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListObjectPoliciesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListObjectPoliciesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AttachedPolicyIds: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.AttachedPolicyIds !== undefined && data.AttachedPolicyIds !== null) {
    contents.AttachedPolicyIds = deserializeAws_restJson1ObjectIdentifierList(data.AttachedPolicyIds, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListObjectPoliciesCommand = deserializeAws_restJson1ListObjectPoliciesCommand;
const deserializeAws_restJson1ListObjectPoliciesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListOutgoingTypedLinksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    TypedLinkSpecifiers: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.TypedLinkSpecifiers !== undefined && data.TypedLinkSpecifiers !== null) {
    contents.TypedLinkSpecifiers = deserializeAws_restJson1TypedLinkSpecifierList(data.TypedLinkSpecifiers, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListOutgoingTypedLinksCommand = deserializeAws_restJson1ListOutgoingTypedLinksCommand;
const deserializeAws_restJson1ListOutgoingTypedLinksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListPolicyAttachmentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPolicyAttachmentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ObjectIdentifiers: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ObjectIdentifiers !== undefined && data.ObjectIdentifiers !== null) {
    contents.ObjectIdentifiers = deserializeAws_restJson1ObjectIdentifierList(data.ObjectIdentifiers, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPolicyAttachmentsCommand = deserializeAws_restJson1ListPolicyAttachmentsCommand;
const deserializeAws_restJson1ListPolicyAttachmentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotPolicyException":
    case "com.amazonaws.clouddirectory#NotPolicyException":
      response = {
        ...(await deserializeAws_restJson1NotPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListPublishedSchemaArnsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPublishedSchemaArnsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SchemaArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaArns !== undefined && data.SchemaArns !== null) {
    contents.SchemaArns = deserializeAws_restJson1Arns(data.SchemaArns, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPublishedSchemaArnsCommand = deserializeAws_restJson1ListPublishedSchemaArnsCommand;
const deserializeAws_restJson1ListPublishedSchemaArnsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
    NextToken: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListTypedLinkFacetAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Attributes: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1TypedLinkAttributeDefinitionList(data.Attributes, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTypedLinkFacetAttributesCommand =
  deserializeAws_restJson1ListTypedLinkFacetAttributesCommand;
const deserializeAws_restJson1ListTypedLinkFacetAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1ListTypedLinkFacetNamesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypedLinkFacetNamesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    FacetNames: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.FacetNames !== undefined && data.FacetNames !== null) {
    contents.FacetNames = deserializeAws_restJson1TypedLinkNameList(data.FacetNames, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTypedLinkFacetNamesCommand = deserializeAws_restJson1ListTypedLinkFacetNamesCommand;
const deserializeAws_restJson1ListTypedLinkFacetNamesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1LookupPolicyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1LookupPolicyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PolicyToPathList: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.PolicyToPathList !== undefined && data.PolicyToPathList !== null) {
    contents.PolicyToPathList = deserializeAws_restJson1PolicyToPathList(data.PolicyToPathList, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1LookupPolicyCommand = deserializeAws_restJson1LookupPolicyCommand;
const deserializeAws_restJson1LookupPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.clouddirectory#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1PublishSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    PublishedSchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.PublishedSchemaArn !== undefined && data.PublishedSchemaArn !== null) {
    contents.PublishedSchemaArn = data.PublishedSchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PublishSchemaCommand = deserializeAws_restJson1PublishSchemaCommand;
const deserializeAws_restJson1PublishSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchemaAlreadyPublishedException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyPublishedException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1PutSchemaFromJsonCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSchemaFromJsonCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutSchemaFromJsonCommand = deserializeAws_restJson1PutSchemaFromJsonCommand;
const deserializeAws_restJson1PutSchemaFromJsonCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSchemaDocException":
    case "com.amazonaws.clouddirectory#InvalidSchemaDocException":
      response = {
        ...(await deserializeAws_restJson1InvalidSchemaDocExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1RemoveFacetFromObjectCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveFacetFromObjectCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveFacetFromObjectCommand = deserializeAws_restJson1RemoveFacetFromObjectCommand;
const deserializeAws_restJson1RemoveFacetFromObjectCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTaggingRequestException":
    case "com.amazonaws.clouddirectory#InvalidTaggingRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidTaggingRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpdateFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFacetCommand = deserializeAws_restJson1UpdateFacetCommand;
const deserializeAws_restJson1UpdateFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      response = {
        ...(await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpdateLinkAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLinkAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLinkAttributesCommand = deserializeAws_restJson1UpdateLinkAttributesCommand;
const deserializeAws_restJson1UpdateLinkAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpdateObjectAttributesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateObjectAttributesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ObjectIdentifier: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ObjectIdentifier !== undefined && data.ObjectIdentifier !== null) {
    contents.ObjectIdentifier = data.ObjectIdentifier;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateObjectAttributesCommand = deserializeAws_restJson1UpdateObjectAttributesCommand;
const deserializeAws_restJson1UpdateObjectAttributesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotEnabledException":
    case "com.amazonaws.clouddirectory#DirectoryNotEnabledException":
      response = {
        ...(await deserializeAws_restJson1DirectoryNotEnabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LinkNameAlreadyInUseException":
    case "com.amazonaws.clouddirectory#LinkNameAlreadyInUseException":
      response = {
        ...(await deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpdateSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    SchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSchemaCommand = deserializeAws_restJson1UpdateSchemaCommand;
const deserializeAws_restJson1UpdateSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpdateTypedLinkFacetCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTypedLinkFacetCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTypedLinkFacetCommand = deserializeAws_restJson1UpdateTypedLinkFacetCommand;
const deserializeAws_restJson1UpdateTypedLinkFacetCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetNotFoundException":
    case "com.amazonaws.clouddirectory#FacetNotFoundException":
      response = {
        ...(await deserializeAws_restJson1FacetNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FacetValidationException":
    case "com.amazonaws.clouddirectory#FacetValidationException":
      response = {
        ...(await deserializeAws_restJson1FacetValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFacetUpdateException":
    case "com.amazonaws.clouddirectory#InvalidFacetUpdateException":
      response = {
        ...(await deserializeAws_restJson1InvalidFacetUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRuleException":
    case "com.amazonaws.clouddirectory#InvalidRuleException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpgradeAppliedSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradeAppliedSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    DirectoryArn: undefined,
    UpgradedSchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.DirectoryArn !== undefined && data.DirectoryArn !== null) {
    contents.DirectoryArn = data.DirectoryArn;
  }
  if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpgradeAppliedSchemaCommand = deserializeAws_restJson1UpgradeAppliedSchemaCommand;
const deserializeAws_restJson1UpgradeAppliedSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      response = {
        ...(await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SchemaAlreadyExistsException":
    case "com.amazonaws.clouddirectory#SchemaAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
const deserializeAws_restJson1UpgradePublishedSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradePublishedSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    UpgradedSchemaArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.UpgradedSchemaArn !== undefined && data.UpgradedSchemaArn !== null) {
    contents.UpgradedSchemaArn = data.UpgradedSchemaArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpgradePublishedSchemaCommand = deserializeAws_restJson1UpgradePublishedSchemaCommand;
const deserializeAws_restJson1UpgradePublishedSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.clouddirectory#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IncompatibleSchemaException":
    case "com.amazonaws.clouddirectory#IncompatibleSchemaException":
      response = {
        ...(await deserializeAws_restJson1IncompatibleSchemaExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.clouddirectory#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.clouddirectory#InvalidArnException":
      response = {
        ...(await deserializeAws_restJson1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAttachmentException":
    case "com.amazonaws.clouddirectory#InvalidAttachmentException":
      response = {
        ...(await deserializeAws_restJson1InvalidAttachmentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.clouddirectory#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.clouddirectory#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RetryableConflictException":
    case "com.amazonaws.clouddirectory#RetryableConflictException":
      response = {
        ...(await deserializeAws_restJson1RetryableConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.clouddirectory#ValidationException":
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
    Message: undefined,
  };
  const data = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};
const deserializeAws_restJson1BatchWriteExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "BatchWriteException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Index: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data = parsedOutput.body;
  if (data.Index !== undefined && data.Index !== null) {
    contents.Index = data.Index;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};
const deserializeAws_restJson1CannotListParentOfRootExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "CannotListParentOfRootException",
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
const deserializeAws_restJson1DirectoryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DirectoryAlreadyExistsException",
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
const deserializeAws_restJson1DirectoryDeletedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DirectoryDeletedException",
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
const deserializeAws_restJson1DirectoryNotDisabledExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DirectoryNotDisabledException",
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
const deserializeAws_restJson1DirectoryNotEnabledExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DirectoryNotEnabledException",
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
const deserializeAws_restJson1FacetAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FacetAlreadyExistsException",
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
const deserializeAws_restJson1FacetInUseExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FacetInUseException",
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
const deserializeAws_restJson1FacetNotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FacetNotFoundException",
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
const deserializeAws_restJson1FacetValidationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "FacetValidationException",
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
const deserializeAws_restJson1IncompatibleSchemaExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "IncompatibleSchemaException",
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
const deserializeAws_restJson1IndexedAttributeMissingExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "IndexedAttributeMissingException",
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
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServiceException",
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
const deserializeAws_restJson1InvalidArnExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidArnException",
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
const deserializeAws_restJson1InvalidAttachmentExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidAttachmentException",
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
const deserializeAws_restJson1InvalidFacetUpdateExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidFacetUpdateException",
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
const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidNextTokenException",
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
const deserializeAws_restJson1InvalidRuleExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidRuleException",
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
const deserializeAws_restJson1InvalidSchemaDocExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidSchemaDocException",
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
const deserializeAws_restJson1InvalidTaggingRequestExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InvalidTaggingRequestException",
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
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "LimitExceededException",
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
const deserializeAws_restJson1LinkNameAlreadyInUseExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "LinkNameAlreadyInUseException",
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
const deserializeAws_restJson1NotIndexExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotIndexException",
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
const deserializeAws_restJson1NotNodeExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotNodeException",
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
const deserializeAws_restJson1NotPolicyExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotPolicyException",
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
const deserializeAws_restJson1ObjectAlreadyDetachedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ObjectAlreadyDetachedException",
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
const deserializeAws_restJson1ObjectNotDetachedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ObjectNotDetachedException",
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
const deserializeAws_restJson1RetryableConflictExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "RetryableConflictException",
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
const deserializeAws_restJson1SchemaAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "SchemaAlreadyExistsException",
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
const deserializeAws_restJson1SchemaAlreadyPublishedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "SchemaAlreadyPublishedException",
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
const deserializeAws_restJson1StillContainsLinksExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "StillContainsLinksException",
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
const deserializeAws_restJson1UnsupportedIndexTypeExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "UnsupportedIndexTypeException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ValidationException",
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
const serializeAws_restJson1AttributeKey = (input, context) => {
  return {
    ...(input.FacetName !== undefined && input.FacetName !== null && { FacetName: input.FacetName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
  };
};
const serializeAws_restJson1AttributeKeyAndValue = (input, context) => {
  return {
    ...(input.Key !== undefined &&
      input.Key !== null && { Key: serializeAws_restJson1AttributeKey(input.Key, context) }),
    ...(input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }),
  };
};
const serializeAws_restJson1AttributeKeyAndValueList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
};
const serializeAws_restJson1AttributeKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeKey(entry, context);
    });
};
const serializeAws_restJson1AttributeNameAndValue = (input, context) => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1TypedAttributeValue(input.Value, context) }),
  };
};
const serializeAws_restJson1AttributeNameAndValueList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AttributeNameAndValue(entry, context);
    });
};
const serializeAws_restJson1AttributeNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1BatchAddFacetToObject = (input, context) => {
  return {
    ...(input.ObjectAttributeList !== undefined &&
      input.ObjectAttributeList !== null && {
        ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};
const serializeAws_restJson1BatchAttachObject = (input, context) => {
  return {
    ...(input.ChildReference !== undefined &&
      input.ChildReference !== null && {
        ChildReference: serializeAws_restJson1ObjectReference(input.ChildReference, context),
      }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }),
  };
};
const serializeAws_restJson1BatchAttachPolicy = (input, context) => {
  return {
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }),
  };
};
const serializeAws_restJson1BatchAttachToIndex = (input, context) => {
  return {
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }),
  };
};
const serializeAws_restJson1BatchAttachTypedLink = (input, context) => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1AttributeNameAndValueList(input.Attributes, context),
      }),
    ...(input.SourceObjectReference !== undefined &&
      input.SourceObjectReference !== null && {
        SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
      }),
    ...(input.TargetObjectReference !== undefined &&
      input.TargetObjectReference !== null && {
        TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
      }),
    ...(input.TypedLinkFacet !== undefined &&
      input.TypedLinkFacet !== null && {
        TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
      }),
  };
};
const serializeAws_restJson1BatchCreateIndex = (input, context) => {
  return {
    ...(input.BatchReferenceName !== undefined &&
      input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.IsUnique !== undefined && input.IsUnique !== null && { IsUnique: input.IsUnique }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.OrderedIndexedAttributeList !== undefined &&
      input.OrderedIndexedAttributeList !== null && {
        OrderedIndexedAttributeList: serializeAws_restJson1AttributeKeyList(input.OrderedIndexedAttributeList, context),
      }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }),
  };
};
const serializeAws_restJson1BatchCreateObject = (input, context) => {
  return {
    ...(input.BatchReferenceName !== undefined &&
      input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ObjectAttributeList !== undefined &&
      input.ObjectAttributeList !== null && {
        ObjectAttributeList: serializeAws_restJson1AttributeKeyAndValueList(input.ObjectAttributeList, context),
      }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacetList(input.SchemaFacet, context) }),
  };
};
const serializeAws_restJson1BatchDeleteObject = (input, context) => {
  return {
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchDetachFromIndex = (input, context) => {
  return {
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }),
  };
};
const serializeAws_restJson1BatchDetachObject = (input, context) => {
  return {
    ...(input.BatchReferenceName !== undefined &&
      input.BatchReferenceName !== null && { BatchReferenceName: input.BatchReferenceName }),
    ...(input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }),
    ...(input.ParentReference !== undefined &&
      input.ParentReference !== null && {
        ParentReference: serializeAws_restJson1ObjectReference(input.ParentReference, context),
      }),
  };
};
const serializeAws_restJson1BatchDetachPolicy = (input, context) => {
  return {
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }),
  };
};
const serializeAws_restJson1BatchDetachTypedLink = (input, context) => {
  return {
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }),
  };
};
const serializeAws_restJson1BatchGetLinkAttributes = (input, context) => {
  return {
    ...(input.AttributeNames !== undefined &&
      input.AttributeNames !== null && {
        AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
      }),
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }),
  };
};
const serializeAws_restJson1BatchGetObjectAttributes = (input, context) => {
  return {
    ...(input.AttributeNames !== undefined &&
      input.AttributeNames !== null && {
        AttributeNames: serializeAws_restJson1AttributeNameList(input.AttributeNames, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};
const serializeAws_restJson1BatchGetObjectInformation = (input, context) => {
  return {
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListAttachedIndices = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TargetReference !== undefined &&
      input.TargetReference !== null && {
        TargetReference: serializeAws_restJson1ObjectReference(input.TargetReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListIncomingTypedLinks = (input, context) => {
  return {
    ...(input.FilterAttributeRanges !== undefined &&
      input.FilterAttributeRanges !== null && {
        FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
      }),
    ...(input.FilterTypedLink !== undefined &&
      input.FilterTypedLink !== null && {
        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListIndex = (input, context) => {
  return {
    ...(input.IndexReference !== undefined &&
      input.IndexReference !== null && {
        IndexReference: serializeAws_restJson1ObjectReference(input.IndexReference, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RangesOnIndexedValues !== undefined &&
      input.RangesOnIndexedValues !== null && {
        RangesOnIndexedValues: serializeAws_restJson1ObjectAttributeRangeList(input.RangesOnIndexedValues, context),
      }),
  };
};
const serializeAws_restJson1BatchListObjectAttributes = (input, context) => {
  return {
    ...(input.FacetFilter !== undefined &&
      input.FacetFilter !== null && { FacetFilter: serializeAws_restJson1SchemaFacet(input.FacetFilter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListObjectChildren = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListObjectParentPaths = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListObjectParents = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListObjectPolicies = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListOutgoingTypedLinks = (input, context) => {
  return {
    ...(input.FilterAttributeRanges !== undefined &&
      input.FilterAttributeRanges !== null && {
        FilterAttributeRanges: serializeAws_restJson1TypedLinkAttributeRangeList(input.FilterAttributeRanges, context),
      }),
    ...(input.FilterTypedLink !== undefined &&
      input.FilterTypedLink !== null && {
        FilterTypedLink: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.FilterTypedLink, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchListPolicyAttachments = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyReference !== undefined &&
      input.PolicyReference !== null && {
        PolicyReference: serializeAws_restJson1ObjectReference(input.PolicyReference, context),
      }),
  };
};
const serializeAws_restJson1BatchLookupPolicy = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchReadOperation = (input, context) => {
  return {
    ...(input.GetLinkAttributes !== undefined &&
      input.GetLinkAttributes !== null && {
        GetLinkAttributes: serializeAws_restJson1BatchGetLinkAttributes(input.GetLinkAttributes, context),
      }),
    ...(input.GetObjectAttributes !== undefined &&
      input.GetObjectAttributes !== null && {
        GetObjectAttributes: serializeAws_restJson1BatchGetObjectAttributes(input.GetObjectAttributes, context),
      }),
    ...(input.GetObjectInformation !== undefined &&
      input.GetObjectInformation !== null && {
        GetObjectInformation: serializeAws_restJson1BatchGetObjectInformation(input.GetObjectInformation, context),
      }),
    ...(input.ListAttachedIndices !== undefined &&
      input.ListAttachedIndices !== null && {
        ListAttachedIndices: serializeAws_restJson1BatchListAttachedIndices(input.ListAttachedIndices, context),
      }),
    ...(input.ListIncomingTypedLinks !== undefined &&
      input.ListIncomingTypedLinks !== null && {
        ListIncomingTypedLinks: serializeAws_restJson1BatchListIncomingTypedLinks(
          input.ListIncomingTypedLinks,
          context
        ),
      }),
    ...(input.ListIndex !== undefined &&
      input.ListIndex !== null && { ListIndex: serializeAws_restJson1BatchListIndex(input.ListIndex, context) }),
    ...(input.ListObjectAttributes !== undefined &&
      input.ListObjectAttributes !== null && {
        ListObjectAttributes: serializeAws_restJson1BatchListObjectAttributes(input.ListObjectAttributes, context),
      }),
    ...(input.ListObjectChildren !== undefined &&
      input.ListObjectChildren !== null && {
        ListObjectChildren: serializeAws_restJson1BatchListObjectChildren(input.ListObjectChildren, context),
      }),
    ...(input.ListObjectParentPaths !== undefined &&
      input.ListObjectParentPaths !== null && {
        ListObjectParentPaths: serializeAws_restJson1BatchListObjectParentPaths(input.ListObjectParentPaths, context),
      }),
    ...(input.ListObjectParents !== undefined &&
      input.ListObjectParents !== null && {
        ListObjectParents: serializeAws_restJson1BatchListObjectParents(input.ListObjectParents, context),
      }),
    ...(input.ListObjectPolicies !== undefined &&
      input.ListObjectPolicies !== null && {
        ListObjectPolicies: serializeAws_restJson1BatchListObjectPolicies(input.ListObjectPolicies, context),
      }),
    ...(input.ListOutgoingTypedLinks !== undefined &&
      input.ListOutgoingTypedLinks !== null && {
        ListOutgoingTypedLinks: serializeAws_restJson1BatchListOutgoingTypedLinks(
          input.ListOutgoingTypedLinks,
          context
        ),
      }),
    ...(input.ListPolicyAttachments !== undefined &&
      input.ListPolicyAttachments !== null && {
        ListPolicyAttachments: serializeAws_restJson1BatchListPolicyAttachments(input.ListPolicyAttachments, context),
      }),
    ...(input.LookupPolicy !== undefined &&
      input.LookupPolicy !== null && {
        LookupPolicy: serializeAws_restJson1BatchLookupPolicy(input.LookupPolicy, context),
      }),
  };
};
const serializeAws_restJson1BatchReadOperationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BatchReadOperation(entry, context);
    });
};
const serializeAws_restJson1BatchRemoveFacetFromObject = (input, context) => {
  return {
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
    ...(input.SchemaFacet !== undefined &&
      input.SchemaFacet !== null && { SchemaFacet: serializeAws_restJson1SchemaFacet(input.SchemaFacet, context) }),
  };
};
const serializeAws_restJson1BatchUpdateLinkAttributes = (input, context) => {
  return {
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1LinkAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.TypedLinkSpecifier !== undefined &&
      input.TypedLinkSpecifier !== null && {
        TypedLinkSpecifier: serializeAws_restJson1TypedLinkSpecifier(input.TypedLinkSpecifier, context),
      }),
  };
};
const serializeAws_restJson1BatchUpdateObjectAttributes = (input, context) => {
  return {
    ...(input.AttributeUpdates !== undefined &&
      input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_restJson1ObjectAttributeUpdateList(input.AttributeUpdates, context),
      }),
    ...(input.ObjectReference !== undefined &&
      input.ObjectReference !== null && {
        ObjectReference: serializeAws_restJson1ObjectReference(input.ObjectReference, context),
      }),
  };
};
const serializeAws_restJson1BatchWriteOperation = (input, context) => {
  return {
    ...(input.AddFacetToObject !== undefined &&
      input.AddFacetToObject !== null && {
        AddFacetToObject: serializeAws_restJson1BatchAddFacetToObject(input.AddFacetToObject, context),
      }),
    ...(input.AttachObject !== undefined &&
      input.AttachObject !== null && {
        AttachObject: serializeAws_restJson1BatchAttachObject(input.AttachObject, context),
      }),
    ...(input.AttachPolicy !== undefined &&
      input.AttachPolicy !== null && {
        AttachPolicy: serializeAws_restJson1BatchAttachPolicy(input.AttachPolicy, context),
      }),
    ...(input.AttachToIndex !== undefined &&
      input.AttachToIndex !== null && {
        AttachToIndex: serializeAws_restJson1BatchAttachToIndex(input.AttachToIndex, context),
      }),
    ...(input.AttachTypedLink !== undefined &&
      input.AttachTypedLink !== null && {
        AttachTypedLink: serializeAws_restJson1BatchAttachTypedLink(input.AttachTypedLink, context),
      }),
    ...(input.CreateIndex !== undefined &&
      input.CreateIndex !== null && {
        CreateIndex: serializeAws_restJson1BatchCreateIndex(input.CreateIndex, context),
      }),
    ...(input.CreateObject !== undefined &&
      input.CreateObject !== null && {
        CreateObject: serializeAws_restJson1BatchCreateObject(input.CreateObject, context),
      }),
    ...(input.DeleteObject !== undefined &&
      input.DeleteObject !== null && {
        DeleteObject: serializeAws_restJson1BatchDeleteObject(input.DeleteObject, context),
      }),
    ...(input.DetachFromIndex !== undefined &&
      input.DetachFromIndex !== null && {
        DetachFromIndex: serializeAws_restJson1BatchDetachFromIndex(input.DetachFromIndex, context),
      }),
    ...(input.DetachObject !== undefined &&
      input.DetachObject !== null && {
        DetachObject: serializeAws_restJson1BatchDetachObject(input.DetachObject, context),
      }),
    ...(input.DetachPolicy !== undefined &&
      input.DetachPolicy !== null && {
        DetachPolicy: serializeAws_restJson1BatchDetachPolicy(input.DetachPolicy, context),
      }),
    ...(input.DetachTypedLink !== undefined &&
      input.DetachTypedLink !== null && {
        DetachTypedLink: serializeAws_restJson1BatchDetachTypedLink(input.DetachTypedLink, context),
      }),
    ...(input.RemoveFacetFromObject !== undefined &&
      input.RemoveFacetFromObject !== null && {
        RemoveFacetFromObject: serializeAws_restJson1BatchRemoveFacetFromObject(input.RemoveFacetFromObject, context),
      }),
    ...(input.UpdateLinkAttributes !== undefined &&
      input.UpdateLinkAttributes !== null && {
        UpdateLinkAttributes: serializeAws_restJson1BatchUpdateLinkAttributes(input.UpdateLinkAttributes, context),
      }),
    ...(input.UpdateObjectAttributes !== undefined &&
      input.UpdateObjectAttributes !== null && {
        UpdateObjectAttributes: serializeAws_restJson1BatchUpdateObjectAttributes(
          input.UpdateObjectAttributes,
          context
        ),
      }),
  };
};
const serializeAws_restJson1BatchWriteOperationList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BatchWriteOperation(entry, context);
    });
};
const serializeAws_restJson1FacetAttribute = (input, context) => {
  return {
    ...(input.AttributeDefinition !== undefined &&
      input.AttributeDefinition !== null && {
        AttributeDefinition: serializeAws_restJson1FacetAttributeDefinition(input.AttributeDefinition, context),
      }),
    ...(input.AttributeReference !== undefined &&
      input.AttributeReference !== null && {
        AttributeReference: serializeAws_restJson1FacetAttributeReference(input.AttributeReference, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RequiredBehavior !== undefined &&
      input.RequiredBehavior !== null && { RequiredBehavior: input.RequiredBehavior }),
  };
};
const serializeAws_restJson1FacetAttributeDefinition = (input, context) => {
  return {
    ...(input.DefaultValue !== undefined &&
      input.DefaultValue !== null && {
        DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
      }),
    ...(input.IsImmutable !== undefined && input.IsImmutable !== null && { IsImmutable: input.IsImmutable }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_restJson1FacetAttributeList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1FacetAttribute(entry, context);
    });
};
const serializeAws_restJson1FacetAttributeReference = (input, context) => {
  return {
    ...(input.TargetAttributeName !== undefined &&
      input.TargetAttributeName !== null && { TargetAttributeName: input.TargetAttributeName }),
    ...(input.TargetFacetName !== undefined &&
      input.TargetFacetName !== null && { TargetFacetName: input.TargetFacetName }),
  };
};
const serializeAws_restJson1FacetAttributeUpdate = (input, context) => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Attribute !== undefined &&
      input.Attribute !== null && { Attribute: serializeAws_restJson1FacetAttribute(input.Attribute, context) }),
  };
};
const serializeAws_restJson1FacetAttributeUpdateList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1FacetAttributeUpdate(entry, context);
    });
};
const serializeAws_restJson1LinkAttributeAction = (input, context) => {
  return {
    ...(input.AttributeActionType !== undefined &&
      input.AttributeActionType !== null && { AttributeActionType: input.AttributeActionType }),
    ...(input.AttributeUpdateValue !== undefined &&
      input.AttributeUpdateValue !== null && {
        AttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(input.AttributeUpdateValue, context),
      }),
  };
};
const serializeAws_restJson1LinkAttributeUpdate = (input, context) => {
  return {
    ...(input.AttributeAction !== undefined &&
      input.AttributeAction !== null && {
        AttributeAction: serializeAws_restJson1LinkAttributeAction(input.AttributeAction, context),
      }),
    ...(input.AttributeKey !== undefined &&
      input.AttributeKey !== null && { AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context) }),
  };
};
const serializeAws_restJson1LinkAttributeUpdateList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1LinkAttributeUpdate(entry, context);
    });
};
const serializeAws_restJson1ObjectAttributeAction = (input, context) => {
  return {
    ...(input.ObjectAttributeActionType !== undefined &&
      input.ObjectAttributeActionType !== null && { ObjectAttributeActionType: input.ObjectAttributeActionType }),
    ...(input.ObjectAttributeUpdateValue !== undefined &&
      input.ObjectAttributeUpdateValue !== null && {
        ObjectAttributeUpdateValue: serializeAws_restJson1TypedAttributeValue(
          input.ObjectAttributeUpdateValue,
          context
        ),
      }),
  };
};
const serializeAws_restJson1ObjectAttributeRange = (input, context) => {
  return {
    ...(input.AttributeKey !== undefined &&
      input.AttributeKey !== null && { AttributeKey: serializeAws_restJson1AttributeKey(input.AttributeKey, context) }),
    ...(input.Range !== undefined &&
      input.Range !== null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }),
  };
};
const serializeAws_restJson1ObjectAttributeRangeList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ObjectAttributeRange(entry, context);
    });
};
const serializeAws_restJson1ObjectAttributeUpdate = (input, context) => {
  return {
    ...(input.ObjectAttributeAction !== undefined &&
      input.ObjectAttributeAction !== null && {
        ObjectAttributeAction: serializeAws_restJson1ObjectAttributeAction(input.ObjectAttributeAction, context),
      }),
    ...(input.ObjectAttributeKey !== undefined &&
      input.ObjectAttributeKey !== null && {
        ObjectAttributeKey: serializeAws_restJson1AttributeKey(input.ObjectAttributeKey, context),
      }),
  };
};
const serializeAws_restJson1ObjectAttributeUpdateList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ObjectAttributeUpdate(entry, context);
    });
};
const serializeAws_restJson1ObjectReference = (input, context) => {
  return {
    ...(input.Selector !== undefined && input.Selector !== null && { Selector: input.Selector }),
  };
};
const serializeAws_restJson1Rule = (input, context) => {
  return {
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_restJson1RuleParameterMap(input.Parameters, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_restJson1RuleMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1Rule(value, context),
    };
  }, {});
};
const serializeAws_restJson1RuleParameterMap = (input, context) => {
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
const serializeAws_restJson1SchemaFacet = (input, context) => {
  return {
    ...(input.FacetName !== undefined && input.FacetName !== null && { FacetName: input.FacetName }),
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
  };
};
const serializeAws_restJson1SchemaFacetList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SchemaFacet(entry, context);
    });
};
const serializeAws_restJson1Tag = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
const serializeAws_restJson1TypedAttributeValue = (input, context) => {
  return models_0_1.TypedAttributeValue.visit(input, {
    BinaryValue: (value) => ({ BinaryValue: context.base64Encoder(value) }),
    BooleanValue: (value) => ({ BooleanValue: value }),
    DatetimeValue: (value) => ({ DatetimeValue: Math.round(value.getTime() / 1000) }),
    NumberValue: (value) => ({ NumberValue: value }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value }),
  });
};
const serializeAws_restJson1TypedAttributeValueRange = (input, context) => {
  return {
    ...(input.EndMode !== undefined && input.EndMode !== null && { EndMode: input.EndMode }),
    ...(input.EndValue !== undefined &&
      input.EndValue !== null && { EndValue: serializeAws_restJson1TypedAttributeValue(input.EndValue, context) }),
    ...(input.StartMode !== undefined && input.StartMode !== null && { StartMode: input.StartMode }),
    ...(input.StartValue !== undefined &&
      input.StartValue !== null && {
        StartValue: serializeAws_restJson1TypedAttributeValue(input.StartValue, context),
      }),
  };
};
const serializeAws_restJson1TypedLinkAttributeDefinition = (input, context) => {
  return {
    ...(input.DefaultValue !== undefined &&
      input.DefaultValue !== null && {
        DefaultValue: serializeAws_restJson1TypedAttributeValue(input.DefaultValue, context),
      }),
    ...(input.IsImmutable !== undefined && input.IsImmutable !== null && { IsImmutable: input.IsImmutable }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RequiredBehavior !== undefined &&
      input.RequiredBehavior !== null && { RequiredBehavior: input.RequiredBehavior }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1RuleMap(input.Rules, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};
const serializeAws_restJson1TypedLinkAttributeDefinitionList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
};
const serializeAws_restJson1TypedLinkAttributeRange = (input, context) => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.Range !== undefined &&
      input.Range !== null && { Range: serializeAws_restJson1TypedAttributeValueRange(input.Range, context) }),
  };
};
const serializeAws_restJson1TypedLinkAttributeRangeList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkAttributeRange(entry, context);
    });
};
const serializeAws_restJson1TypedLinkFacet = (input, context) => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_restJson1TypedLinkAttributeDefinitionList(input.Attributes, context),
      }),
    ...(input.IdentityAttributeOrder !== undefined &&
      input.IdentityAttributeOrder !== null && {
        IdentityAttributeOrder: serializeAws_restJson1AttributeNameList(input.IdentityAttributeOrder, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};
const serializeAws_restJson1TypedLinkFacetAttributeUpdate = (input, context) => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Attribute !== undefined &&
      input.Attribute !== null && {
        Attribute: serializeAws_restJson1TypedLinkAttributeDefinition(input.Attribute, context),
      }),
  };
};
const serializeAws_restJson1TypedLinkFacetAttributeUpdateList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1TypedLinkFacetAttributeUpdate(entry, context);
    });
};
const serializeAws_restJson1TypedLinkSchemaAndFacetName = (input, context) => {
  return {
    ...(input.SchemaArn !== undefined && input.SchemaArn !== null && { SchemaArn: input.SchemaArn }),
    ...(input.TypedLinkName !== undefined && input.TypedLinkName !== null && { TypedLinkName: input.TypedLinkName }),
  };
};
const serializeAws_restJson1TypedLinkSpecifier = (input, context) => {
  return {
    ...(input.IdentityAttributeValues !== undefined &&
      input.IdentityAttributeValues !== null && {
        IdentityAttributeValues: serializeAws_restJson1AttributeNameAndValueList(
          input.IdentityAttributeValues,
          context
        ),
      }),
    ...(input.SourceObjectReference !== undefined &&
      input.SourceObjectReference !== null && {
        SourceObjectReference: serializeAws_restJson1ObjectReference(input.SourceObjectReference, context),
      }),
    ...(input.TargetObjectReference !== undefined &&
      input.TargetObjectReference !== null && {
        TargetObjectReference: serializeAws_restJson1ObjectReference(input.TargetObjectReference, context),
      }),
    ...(input.TypedLinkFacet !== undefined &&
      input.TypedLinkFacet !== null && {
        TypedLinkFacet: serializeAws_restJson1TypedLinkSchemaAndFacetName(input.TypedLinkFacet, context),
      }),
  };
};
const deserializeAws_restJson1Arns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1AttributeKey = (output, context) => {
  return {
    FacetName: output.FacetName !== undefined && output.FacetName !== null ? output.FacetName : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
  };
};
const deserializeAws_restJson1AttributeKeyAndValue = (output, context) => {
  return {
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_restJson1AttributeKey(output.Key, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined,
  };
};
const deserializeAws_restJson1AttributeKeyAndValueList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttributeKeyAndValue(entry, context);
    });
};
const deserializeAws_restJson1AttributeNameAndValue = (output, context) => {
  return {
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.Value, context)
        : undefined,
  };
};
const deserializeAws_restJson1AttributeNameAndValueList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AttributeNameAndValue(entry, context);
    });
};
const deserializeAws_restJson1AttributeNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1BatchAddFacetToObjectResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchAttachObjectResponse = (output, context) => {
  return {
    attachedObjectIdentifier:
      output.attachedObjectIdentifier !== undefined && output.attachedObjectIdentifier !== null
        ? output.attachedObjectIdentifier
        : undefined,
  };
};
const deserializeAws_restJson1BatchAttachPolicyResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchAttachToIndexResponse = (output, context) => {
  return {
    AttachedObjectIdentifier:
      output.AttachedObjectIdentifier !== undefined && output.AttachedObjectIdentifier !== null
        ? output.AttachedObjectIdentifier
        : undefined,
  };
};
const deserializeAws_restJson1BatchAttachTypedLinkResponse = (output, context) => {
  return {
    TypedLinkSpecifier:
      output.TypedLinkSpecifier !== undefined && output.TypedLinkSpecifier !== null
        ? deserializeAws_restJson1TypedLinkSpecifier(output.TypedLinkSpecifier, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchCreateIndexResponse = (output, context) => {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
const deserializeAws_restJson1BatchCreateObjectResponse = (output, context) => {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
const deserializeAws_restJson1BatchDeleteObjectResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchDetachFromIndexResponse = (output, context) => {
  return {
    DetachedObjectIdentifier:
      output.DetachedObjectIdentifier !== undefined && output.DetachedObjectIdentifier !== null
        ? output.DetachedObjectIdentifier
        : undefined,
  };
};
const deserializeAws_restJson1BatchDetachObjectResponse = (output, context) => {
  return {
    detachedObjectIdentifier:
      output.detachedObjectIdentifier !== undefined && output.detachedObjectIdentifier !== null
        ? output.detachedObjectIdentifier
        : undefined,
  };
};
const deserializeAws_restJson1BatchDetachPolicyResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchDetachTypedLinkResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchGetLinkAttributesResponse = (output, context) => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchGetObjectAttributesResponse = (output, context) => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchGetObjectInformationResponse = (output, context) => {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
    SchemaFacets:
      output.SchemaFacets !== undefined && output.SchemaFacets !== null
        ? deserializeAws_restJson1SchemaFacetList(output.SchemaFacets, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchListAttachedIndicesResponse = (output, context) => {
  return {
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListIncomingTypedLinksResponse = (output, context) => {
  return {
    LinkSpecifiers:
      output.LinkSpecifiers !== undefined && output.LinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.LinkSpecifiers, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListIndexResponse = (output, context) => {
  return {
    IndexAttachments:
      output.IndexAttachments !== undefined && output.IndexAttachments !== null
        ? deserializeAws_restJson1IndexAttachmentList(output.IndexAttachments, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListObjectAttributesResponse = (output, context) => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.Attributes, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListObjectChildrenResponse = (output, context) => {
  return {
    Children:
      output.Children !== undefined && output.Children !== null
        ? deserializeAws_restJson1LinkNameToObjectIdentifierMap(output.Children, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListObjectParentPathsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PathToObjectIdentifiersList:
      output.PathToObjectIdentifiersList !== undefined && output.PathToObjectIdentifiersList !== null
        ? deserializeAws_restJson1PathToObjectIdentifiersList(output.PathToObjectIdentifiersList, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchListObjectParentsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ParentLinks:
      output.ParentLinks !== undefined && output.ParentLinks !== null
        ? deserializeAws_restJson1ObjectIdentifierAndLinkNameList(output.ParentLinks, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchListObjectPoliciesResponse = (output, context) => {
  return {
    AttachedPolicyIds:
      output.AttachedPolicyIds !== undefined && output.AttachedPolicyIds !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.AttachedPolicyIds, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_restJson1BatchListOutgoingTypedLinksResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TypedLinkSpecifiers:
      output.TypedLinkSpecifiers !== undefined && output.TypedLinkSpecifiers !== null
        ? deserializeAws_restJson1TypedLinkSpecifierList(output.TypedLinkSpecifiers, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchListPolicyAttachmentsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined && output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchLookupPolicyResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PolicyToPathList:
      output.PolicyToPathList !== undefined && output.PolicyToPathList !== null
        ? deserializeAws_restJson1PolicyToPathList(output.PolicyToPathList, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchReadException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_restJson1BatchReadOperationResponse = (output, context) => {
  return {
    ExceptionResponse:
      output.ExceptionResponse !== undefined && output.ExceptionResponse !== null
        ? deserializeAws_restJson1BatchReadException(output.ExceptionResponse, context)
        : undefined,
    SuccessfulResponse:
      output.SuccessfulResponse !== undefined && output.SuccessfulResponse !== null
        ? deserializeAws_restJson1BatchReadSuccessfulResponse(output.SuccessfulResponse, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchReadOperationResponseList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchReadOperationResponse(entry, context);
    });
};
const deserializeAws_restJson1BatchReadSuccessfulResponse = (output, context) => {
  return {
    GetLinkAttributes:
      output.GetLinkAttributes !== undefined && output.GetLinkAttributes !== null
        ? deserializeAws_restJson1BatchGetLinkAttributesResponse(output.GetLinkAttributes, context)
        : undefined,
    GetObjectAttributes:
      output.GetObjectAttributes !== undefined && output.GetObjectAttributes !== null
        ? deserializeAws_restJson1BatchGetObjectAttributesResponse(output.GetObjectAttributes, context)
        : undefined,
    GetObjectInformation:
      output.GetObjectInformation !== undefined && output.GetObjectInformation !== null
        ? deserializeAws_restJson1BatchGetObjectInformationResponse(output.GetObjectInformation, context)
        : undefined,
    ListAttachedIndices:
      output.ListAttachedIndices !== undefined && output.ListAttachedIndices !== null
        ? deserializeAws_restJson1BatchListAttachedIndicesResponse(output.ListAttachedIndices, context)
        : undefined,
    ListIncomingTypedLinks:
      output.ListIncomingTypedLinks !== undefined && output.ListIncomingTypedLinks !== null
        ? deserializeAws_restJson1BatchListIncomingTypedLinksResponse(output.ListIncomingTypedLinks, context)
        : undefined,
    ListIndex:
      output.ListIndex !== undefined && output.ListIndex !== null
        ? deserializeAws_restJson1BatchListIndexResponse(output.ListIndex, context)
        : undefined,
    ListObjectAttributes:
      output.ListObjectAttributes !== undefined && output.ListObjectAttributes !== null
        ? deserializeAws_restJson1BatchListObjectAttributesResponse(output.ListObjectAttributes, context)
        : undefined,
    ListObjectChildren:
      output.ListObjectChildren !== undefined && output.ListObjectChildren !== null
        ? deserializeAws_restJson1BatchListObjectChildrenResponse(output.ListObjectChildren, context)
        : undefined,
    ListObjectParentPaths:
      output.ListObjectParentPaths !== undefined && output.ListObjectParentPaths !== null
        ? deserializeAws_restJson1BatchListObjectParentPathsResponse(output.ListObjectParentPaths, context)
        : undefined,
    ListObjectParents:
      output.ListObjectParents !== undefined && output.ListObjectParents !== null
        ? deserializeAws_restJson1BatchListObjectParentsResponse(output.ListObjectParents, context)
        : undefined,
    ListObjectPolicies:
      output.ListObjectPolicies !== undefined && output.ListObjectPolicies !== null
        ? deserializeAws_restJson1BatchListObjectPoliciesResponse(output.ListObjectPolicies, context)
        : undefined,
    ListOutgoingTypedLinks:
      output.ListOutgoingTypedLinks !== undefined && output.ListOutgoingTypedLinks !== null
        ? deserializeAws_restJson1BatchListOutgoingTypedLinksResponse(output.ListOutgoingTypedLinks, context)
        : undefined,
    ListPolicyAttachments:
      output.ListPolicyAttachments !== undefined && output.ListPolicyAttachments !== null
        ? deserializeAws_restJson1BatchListPolicyAttachmentsResponse(output.ListPolicyAttachments, context)
        : undefined,
    LookupPolicy:
      output.LookupPolicy !== undefined && output.LookupPolicy !== null
        ? deserializeAws_restJson1BatchLookupPolicyResponse(output.LookupPolicy, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchRemoveFacetFromObjectResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchUpdateLinkAttributesResponse = (output, context) => {
  return {};
};
const deserializeAws_restJson1BatchUpdateObjectAttributesResponse = (output, context) => {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
const deserializeAws_restJson1BatchWriteOperationResponse = (output, context) => {
  return {
    AddFacetToObject:
      output.AddFacetToObject !== undefined && output.AddFacetToObject !== null
        ? deserializeAws_restJson1BatchAddFacetToObjectResponse(output.AddFacetToObject, context)
        : undefined,
    AttachObject:
      output.AttachObject !== undefined && output.AttachObject !== null
        ? deserializeAws_restJson1BatchAttachObjectResponse(output.AttachObject, context)
        : undefined,
    AttachPolicy:
      output.AttachPolicy !== undefined && output.AttachPolicy !== null
        ? deserializeAws_restJson1BatchAttachPolicyResponse(output.AttachPolicy, context)
        : undefined,
    AttachToIndex:
      output.AttachToIndex !== undefined && output.AttachToIndex !== null
        ? deserializeAws_restJson1BatchAttachToIndexResponse(output.AttachToIndex, context)
        : undefined,
    AttachTypedLink:
      output.AttachTypedLink !== undefined && output.AttachTypedLink !== null
        ? deserializeAws_restJson1BatchAttachTypedLinkResponse(output.AttachTypedLink, context)
        : undefined,
    CreateIndex:
      output.CreateIndex !== undefined && output.CreateIndex !== null
        ? deserializeAws_restJson1BatchCreateIndexResponse(output.CreateIndex, context)
        : undefined,
    CreateObject:
      output.CreateObject !== undefined && output.CreateObject !== null
        ? deserializeAws_restJson1BatchCreateObjectResponse(output.CreateObject, context)
        : undefined,
    DeleteObject:
      output.DeleteObject !== undefined && output.DeleteObject !== null
        ? deserializeAws_restJson1BatchDeleteObjectResponse(output.DeleteObject, context)
        : undefined,
    DetachFromIndex:
      output.DetachFromIndex !== undefined && output.DetachFromIndex !== null
        ? deserializeAws_restJson1BatchDetachFromIndexResponse(output.DetachFromIndex, context)
        : undefined,
    DetachObject:
      output.DetachObject !== undefined && output.DetachObject !== null
        ? deserializeAws_restJson1BatchDetachObjectResponse(output.DetachObject, context)
        : undefined,
    DetachPolicy:
      output.DetachPolicy !== undefined && output.DetachPolicy !== null
        ? deserializeAws_restJson1BatchDetachPolicyResponse(output.DetachPolicy, context)
        : undefined,
    DetachTypedLink:
      output.DetachTypedLink !== undefined && output.DetachTypedLink !== null
        ? deserializeAws_restJson1BatchDetachTypedLinkResponse(output.DetachTypedLink, context)
        : undefined,
    RemoveFacetFromObject:
      output.RemoveFacetFromObject !== undefined && output.RemoveFacetFromObject !== null
        ? deserializeAws_restJson1BatchRemoveFacetFromObjectResponse(output.RemoveFacetFromObject, context)
        : undefined,
    UpdateLinkAttributes:
      output.UpdateLinkAttributes !== undefined && output.UpdateLinkAttributes !== null
        ? deserializeAws_restJson1BatchUpdateLinkAttributesResponse(output.UpdateLinkAttributes, context)
        : undefined,
    UpdateObjectAttributes:
      output.UpdateObjectAttributes !== undefined && output.UpdateObjectAttributes !== null
        ? deserializeAws_restJson1BatchUpdateObjectAttributesResponse(output.UpdateObjectAttributes, context)
        : undefined,
  };
};
const deserializeAws_restJson1BatchWriteOperationResponseList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchWriteOperationResponse(entry, context);
    });
};
const deserializeAws_restJson1Directory = (output, context) => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    DirectoryArn: output.DirectoryArn !== undefined && output.DirectoryArn !== null ? output.DirectoryArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  };
};
const deserializeAws_restJson1DirectoryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Directory(entry, context);
    });
};
const deserializeAws_restJson1Facet = (output, context) => {
  return {
    FacetStyle: output.FacetStyle !== undefined && output.FacetStyle !== null ? output.FacetStyle : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ObjectType: output.ObjectType !== undefined && output.ObjectType !== null ? output.ObjectType : undefined,
  };
};
const deserializeAws_restJson1FacetAttribute = (output, context) => {
  return {
    AttributeDefinition:
      output.AttributeDefinition !== undefined && output.AttributeDefinition !== null
        ? deserializeAws_restJson1FacetAttributeDefinition(output.AttributeDefinition, context)
        : undefined,
    AttributeReference:
      output.AttributeReference !== undefined && output.AttributeReference !== null
        ? deserializeAws_restJson1FacetAttributeReference(output.AttributeReference, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null ? output.RequiredBehavior : undefined,
  };
};
const deserializeAws_restJson1FacetAttributeDefinition = (output, context) => {
  return {
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.DefaultValue, context)
        : undefined,
    IsImmutable: output.IsImmutable !== undefined && output.IsImmutable !== null ? output.IsImmutable : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_restJson1FacetAttributeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FacetAttribute(entry, context);
    });
};
const deserializeAws_restJson1FacetAttributeReference = (output, context) => {
  return {
    TargetAttributeName:
      output.TargetAttributeName !== undefined && output.TargetAttributeName !== null
        ? output.TargetAttributeName
        : undefined,
    TargetFacetName:
      output.TargetFacetName !== undefined && output.TargetFacetName !== null ? output.TargetFacetName : undefined,
  };
};
const deserializeAws_restJson1FacetNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1IndexAttachment = (output, context) => {
  return {
    IndexedAttributes:
      output.IndexedAttributes !== undefined && output.IndexedAttributes !== null
        ? deserializeAws_restJson1AttributeKeyAndValueList(output.IndexedAttributes, context)
        : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
const deserializeAws_restJson1IndexAttachmentList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1IndexAttachment(entry, context);
    });
};
const deserializeAws_restJson1LinkNameToObjectIdentifierMap = (output, context) => {
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
const deserializeAws_restJson1ObjectIdentifierAndLinkNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple(entry, context);
    });
};
const deserializeAws_restJson1ObjectIdentifierAndLinkNameTuple = (output, context) => {
  return {
    LinkName: output.LinkName !== undefined && output.LinkName !== null ? output.LinkName : undefined,
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
  };
};
const deserializeAws_restJson1ObjectIdentifierList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ObjectIdentifierToLinkNameMap = (output, context) => {
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
const deserializeAws_restJson1ObjectReference = (output, context) => {
  return {
    Selector: output.Selector !== undefined && output.Selector !== null ? output.Selector : undefined,
  };
};
const deserializeAws_restJson1PathToObjectIdentifiers = (output, context) => {
  return {
    ObjectIdentifiers:
      output.ObjectIdentifiers !== undefined && output.ObjectIdentifiers !== null
        ? deserializeAws_restJson1ObjectIdentifierList(output.ObjectIdentifiers, context)
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  };
};
const deserializeAws_restJson1PathToObjectIdentifiersList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PathToObjectIdentifiers(entry, context);
    });
};
const deserializeAws_restJson1PolicyAttachment = (output, context) => {
  return {
    ObjectIdentifier:
      output.ObjectIdentifier !== undefined && output.ObjectIdentifier !== null ? output.ObjectIdentifier : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
  };
};
const deserializeAws_restJson1PolicyAttachmentList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PolicyAttachment(entry, context);
    });
};
const deserializeAws_restJson1PolicyToPath = (output, context) => {
  return {
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    Policies:
      output.Policies !== undefined && output.Policies !== null
        ? deserializeAws_restJson1PolicyAttachmentList(output.Policies, context)
        : undefined,
  };
};
const deserializeAws_restJson1PolicyToPathList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1PolicyToPath(entry, context);
    });
};
const deserializeAws_restJson1Rule = (output, context) => {
  return {
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_restJson1RuleParameterMap(output.Parameters, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_restJson1RuleMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Rule(value, context),
    };
  }, {});
};
const deserializeAws_restJson1RuleParameterMap = (output, context) => {
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
const deserializeAws_restJson1SchemaFacet = (output, context) => {
  return {
    FacetName: output.FacetName !== undefined && output.FacetName !== null ? output.FacetName : undefined,
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
  };
};
const deserializeAws_restJson1SchemaFacetList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SchemaFacet(entry, context);
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
const deserializeAws_restJson1TypedAttributeValue = (output, context) => {
  if (output.BinaryValue !== undefined && output.BinaryValue !== null) {
    return {
      BinaryValue: context.base64Decoder(output.BinaryValue),
    };
  }
  if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
    return {
      BooleanValue: output.BooleanValue,
    };
  }
  if (output.DatetimeValue !== undefined && output.DatetimeValue !== null) {
    return {
      DatetimeValue: new Date(Math.round(output.DatetimeValue * 1000)),
    };
  }
  if (output.NumberValue !== undefined && output.NumberValue !== null) {
    return {
      NumberValue: output.NumberValue,
    };
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    return {
      StringValue: output.StringValue,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1TypedLinkAttributeDefinition = (output, context) => {
  return {
    DefaultValue:
      output.DefaultValue !== undefined && output.DefaultValue !== null
        ? deserializeAws_restJson1TypedAttributeValue(output.DefaultValue, context)
        : undefined,
    IsImmutable: output.IsImmutable !== undefined && output.IsImmutable !== null ? output.IsImmutable : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RequiredBehavior:
      output.RequiredBehavior !== undefined && output.RequiredBehavior !== null ? output.RequiredBehavior : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1RuleMap(output.Rules, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_restJson1TypedLinkAttributeDefinitionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TypedLinkAttributeDefinition(entry, context);
    });
};
const deserializeAws_restJson1TypedLinkNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1TypedLinkSchemaAndFacetName = (output, context) => {
  return {
    SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
    TypedLinkName:
      output.TypedLinkName !== undefined && output.TypedLinkName !== null ? output.TypedLinkName : undefined,
  };
};
const deserializeAws_restJson1TypedLinkSpecifier = (output, context) => {
  return {
    IdentityAttributeValues:
      output.IdentityAttributeValues !== undefined && output.IdentityAttributeValues !== null
        ? deserializeAws_restJson1AttributeNameAndValueList(output.IdentityAttributeValues, context)
        : undefined,
    SourceObjectReference:
      output.SourceObjectReference !== undefined && output.SourceObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(output.SourceObjectReference, context)
        : undefined,
    TargetObjectReference:
      output.TargetObjectReference !== undefined && output.TargetObjectReference !== null
        ? deserializeAws_restJson1ObjectReference(output.TargetObjectReference, context)
        : undefined,
    TypedLinkFacet:
      output.TypedLinkFacet !== undefined && output.TypedLinkFacet !== null
        ? deserializeAws_restJson1TypedLinkSchemaAndFacetName(output.TypedLinkFacet, context)
        : undefined,
  };
};
const deserializeAws_restJson1TypedLinkSpecifierList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1TypedLinkSpecifier(entry, context);
    });
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
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
