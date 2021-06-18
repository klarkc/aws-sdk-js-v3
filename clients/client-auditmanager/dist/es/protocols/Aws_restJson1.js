import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/associateToAssessmentReport";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.evidenceFolderId !== undefined &&
                input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/batchAssociateToAssessmentReport";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.evidenceFolderId !== undefined &&
                  input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }
              ),
              input.evidenceIds !== undefined &&
                input.evidenceIds !== null && {
                  evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1BatchCreateDelegationByAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/delegations";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.createDelegationRequests !== undefined &&
                input.createDelegationRequests !== null && {
                  createDelegationRequests: serializeAws_restJson1CreateDelegationRequests(
                    input.createDelegationRequests,
                    context
                  ),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/delegations";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.delegationIds !== undefined &&
                input.delegationIds !== null && {
                  delegationIds: serializeAws_restJson1DelegationIds(input.delegationIds, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.evidenceFolderId !== undefined &&
                  input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }
              ),
              input.evidenceIds !== undefined &&
                input.evidenceIds !== null && {
                  evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.manualEvidence !== undefined &&
                input.manualEvidence !== null && {
                  manualEvidence: serializeAws_restJson1ManualEvidenceList(input.manualEvidence, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          {},
                          input.assessmentReportsDestination !== undefined &&
                            input.assessmentReportsDestination !== null && {
                              assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
                                input.assessmentReportsDestination,
                                context
                              ),
                            }
                        ),
                        input.description !== undefined &&
                          input.description !== null && { description: input.description }
                      ),
                      input.frameworkId !== undefined &&
                        input.frameworkId !== null && { frameworkId: input.frameworkId }
                    ),
                    input.name !== undefined && input.name !== null && { name: input.name }
                  ),
                  input.roles !== undefined &&
                    input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }
                ),
                input.scope !== undefined &&
                  input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateAssessmentFrameworkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessmentFrameworks";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.complianceType !== undefined &&
                        input.complianceType !== null && { complianceType: input.complianceType }
                    ),
                    input.controlSets !== undefined &&
                      input.controlSets !== null && {
                        controlSets: serializeAws_restJson1CreateAssessmentFrameworkControlSets(
                          input.controlSets,
                          context
                        ),
                      }
                  ),
                  input.description !== undefined && input.description !== null && { description: input.description }
                ),
                input.name !== undefined && input.name !== null && { name: input.name }
              ),
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateAssessmentReportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/reports";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.description !== undefined && input.description !== null && { description: input.description }
              ),
              input.name !== undefined && input.name !== null && { name: input.name }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/controls";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          {},
                          input.actionPlanInstructions !== undefined &&
                            input.actionPlanInstructions !== null && {
                              actionPlanInstructions: input.actionPlanInstructions,
                            }
                        ),
                        input.actionPlanTitle !== undefined &&
                          input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }
                      ),
                      input.controlMappingSources !== undefined &&
                        input.controlMappingSources !== null && {
                          controlMappingSources: serializeAws_restJson1CreateControlMappingSources(
                            input.controlMappingSources,
                            context
                          ),
                        }
                    ),
                    input.description !== undefined && input.description !== null && { description: input.description }
                  ),
                  input.name !== undefined && input.name !== null && { name: input.name }
                ),
                input.tags !== undefined &&
                  input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
              ),
              input.testingInformation !== undefined &&
                input.testingInformation !== null && { testingInformation: input.testingInformation }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteAssessmentFrameworkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessmentFrameworks/{frameworkId}";
          if (input.frameworkId !== undefined) {
            labelValue = input.frameworkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: frameworkId.");
            }
            resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: frameworkId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteAssessmentReportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/reports/{assessmentReportId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.assessmentReportId !== undefined) {
            labelValue = input.assessmentReportId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentReportId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentReportId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/controls/{controlId}";
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeregisterAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/deregisterAccount";
          body = "";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeregisterOrganizationAdminAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/deregisterOrganizationAdminAccount";
          body = JSON.stringify(
            __assign(
              {},
              input.adminAccountId !== undefined &&
                input.adminAccountId !== null && { adminAccountId: input.adminAccountId }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/disassociateFromAssessmentReport";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.evidenceFolderId !== undefined &&
                input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetAccountStatusCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/status";
          body = "";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetAssessmentFrameworkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessmentFrameworks/{frameworkId}";
          if (input.frameworkId !== undefined) {
            labelValue = input.frameworkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: frameworkId.");
            }
            resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: frameworkId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetAssessmentReportUrlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/reports/{assessmentReportId}/url";
          if (input.assessmentReportId !== undefined) {
            labelValue = input.assessmentReportId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentReportId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentReportId.");
          }
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetChangeLogsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/changelogs";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          query = __assign(
            __assign(
              __assign(
                __assign({}, input.controlSetId !== undefined && { controlSetId: input.controlSetId }),
                input.controlId !== undefined && { controlId: input.controlId }
              ),
              input.nextToken !== undefined && { nextToken: input.nextToken }
            ),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/controls/{controlId}";
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetDelegationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/delegations";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetEvidenceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.evidenceFolderId !== undefined) {
            labelValue = input.evidenceFolderId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
            }
            resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: evidenceFolderId.");
          }
          if (input.evidenceId !== undefined) {
            labelValue = input.evidenceId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: evidenceId.");
            }
            resolvedPath = resolvedPath.replace("{evidenceId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: evidenceId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetEvidenceByEvidenceFolderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath =
            "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.evidenceFolderId !== undefined) {
            labelValue = input.evidenceFolderId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
            }
            resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: evidenceFolderId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetEvidenceFolderCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.evidenceFolderId !== undefined) {
            labelValue = input.evidenceFolderId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
            }
            resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: evidenceFolderId.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/evidenceFolders";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetOrganizationAdminAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/organizationAdminAccount";
          body = "";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetServicesInScopeCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/services";
          body = "";
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1GetSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/settings/{attribute}";
          if (input.attribute !== undefined) {
            labelValue = input.attribute;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: attribute.");
            }
            resolvedPath = resolvedPath.replace("{attribute}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: attribute.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListAssessmentFrameworksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessmentFrameworks";
          query = __assign(
            __assign(
              __assign({}, input.frameworkType !== undefined && { frameworkType: input.frameworkType }),
              input.nextToken !== undefined && { nextToken: input.nextToken }
            ),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListAssessmentReportsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessmentReports";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListAssessmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/assessments";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListControlsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/controls";
          query = __assign(
            __assign(
              __assign({}, input.controlType !== undefined && { controlType: input.controlType }),
              input.nextToken !== undefined && { nextToken: input.nextToken }
            ),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListKeywordsForDataSourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/dataSourceKeywords";
          query = __assign(
            __assign(
              __assign({}, input.source !== undefined && { source: input.source }),
              input.nextToken !== undefined && { nextToken: input.nextToken }
            ),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListNotificationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/notifications";
          query = __assign(
            __assign({}, input.nextToken !== undefined && { nextToken: input.nextToken }),
            input.maxResults !== undefined && { maxResults: input.maxResults.toString() }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1RegisterAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/registerAccount";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.delegatedAdminAccount !== undefined &&
                  input.delegatedAdminAccount !== null && { delegatedAdminAccount: input.delegatedAdminAccount }
              ),
              input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1RegisterOrganizationAdminAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account/registerOrganizationAdminAccount";
          body = JSON.stringify(
            __assign(
              {},
              input.adminAccountId !== undefined &&
                input.adminAccountId !== null && { adminAccountId: input.adminAccountId }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          query = __assign(
            {},
            input.tagKeys !== undefined && {
              tagKeys: (input.tagKeys || []).map(function (_entry) {
                return _entry;
              }),
            }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAssessmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.assessmentDescription !== undefined &&
                        input.assessmentDescription !== null && { assessmentDescription: input.assessmentDescription }
                    ),
                    input.assessmentName !== undefined &&
                      input.assessmentName !== null && { assessmentName: input.assessmentName }
                  ),
                  input.assessmentReportsDestination !== undefined &&
                    input.assessmentReportsDestination !== null && {
                      assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
                        input.assessmentReportsDestination,
                        context
                      ),
                    }
                ),
                input.roles !== undefined &&
                  input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }
              ),
              input.scope !== undefined &&
                input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAssessmentControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.commentBody !== undefined && input.commentBody !== null && { commentBody: input.commentBody }
              ),
              input.controlStatus !== undefined &&
                input.controlStatus !== null && { controlStatus: input.controlStatus }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAssessmentControlSetStatusCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/controlSets/{controlSetId}/status";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          if (input.controlSetId !== undefined) {
            labelValue = input.controlSetId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlSetId.");
            }
            resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlSetId.");
          }
          body = JSON.stringify(
            __assign(
              __assign({}, input.comment !== undefined && input.comment !== null && { comment: input.comment }),
              input.status !== undefined && input.status !== null && { status: input.status }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAssessmentFrameworkCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessmentFrameworks/{frameworkId}";
          if (input.frameworkId !== undefined) {
            labelValue = input.frameworkId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: frameworkId.");
            }
            resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: frameworkId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.complianceType !== undefined &&
                      input.complianceType !== null && { complianceType: input.complianceType }
                  ),
                  input.controlSets !== undefined &&
                    input.controlSets !== null && {
                      controlSets: serializeAws_restJson1UpdateAssessmentFrameworkControlSets(
                        input.controlSets,
                        context
                      ),
                    }
                ),
                input.description !== undefined && input.description !== null && { description: input.description }
              ),
              input.name !== undefined && input.name !== null && { name: input.name }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateAssessmentStatusCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessments/{assessmentId}/status";
          if (input.assessmentId !== undefined) {
            labelValue = input.assessmentId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: assessmentId.");
            }
            resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: assessmentId.");
          }
          body = JSON.stringify(
            __assign({}, input.status !== undefined && input.status !== null && { status: input.status })
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateControlCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/controls/{controlId}";
          if (input.controlId !== undefined) {
            labelValue = input.controlId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: controlId.");
            }
            resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: controlId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.actionPlanInstructions !== undefined &&
                          input.actionPlanInstructions !== null && {
                            actionPlanInstructions: input.actionPlanInstructions,
                          }
                      ),
                      input.actionPlanTitle !== undefined &&
                        input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }
                    ),
                    input.controlMappingSources !== undefined &&
                      input.controlMappingSources !== null && {
                        controlMappingSources: serializeAws_restJson1ControlMappingSources(
                          input.controlMappingSources,
                          context
                        ),
                      }
                  ),
                  input.description !== undefined && input.description !== null && { description: input.description }
                ),
                input.name !== undefined && input.name !== null && { name: input.name }
              ),
              input.testingInformation !== undefined &&
                input.testingInformation !== null && { testingInformation: input.testingInformation }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/settings";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.defaultAssessmentReportsDestination !== undefined &&
                      input.defaultAssessmentReportsDestination !== null && {
                        defaultAssessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
                          input.defaultAssessmentReportsDestination,
                          context
                        ),
                      }
                  ),
                  input.defaultProcessOwners !== undefined &&
                    input.defaultProcessOwners !== null && {
                      defaultProcessOwners: serializeAws_restJson1Roles(input.defaultProcessOwners, context),
                    }
                ),
                input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }
              ),
              input.snsTopic !== undefined && input.snsTopic !== null && { snsTopic: input.snsTopic }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "PUT",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ValidateAssessmentReportIntegrityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/assessmentReports/integrity";
          body = JSON.stringify(
            __assign(
              {},
              input.s3RelativePath !== undefined &&
                input.s3RelativePath !== null && { s3RelativePath: input.s3RelativePath }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            errors: undefined,
            evidenceIds: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.errors !== undefined && data.errors !== null) {
            contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
          }
          if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
            contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            delegations: undefined,
            errors: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.delegations !== undefined && data.delegations !== null) {
            contents.delegations = deserializeAws_restJson1Delegations(data.delegations, context);
          }
          if (data.errors !== undefined && data.errors !== null) {
            contents.errors = deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors(data.errors, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            errors: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.errors !== undefined && data.errors !== null) {
            contents.errors = deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors(data.errors, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            errors: undefined,
            evidenceIds: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.errors !== undefined && data.errors !== null) {
            contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
          }
          if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
            contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            errors: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.errors !== undefined && data.errors !== null) {
            contents.errors = deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors(
              data.errors,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateAssessmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessment !== undefined && data.assessment !== null) {
            contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateAssessmentFrameworkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateAssessmentFrameworkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            framework: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.framework !== undefined && data.framework !== null) {
            contents.framework = deserializeAws_restJson1Framework(data.framework, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAssessmentFrameworkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateAssessmentReportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateAssessmentReportCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessmentReport: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessmentReport !== undefined && data.assessmentReport !== null) {
            contents.assessmentReport = deserializeAws_restJson1AssessmentReport(data.assessmentReport, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateAssessmentReportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateControlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            control: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.control !== undefined && data.control !== null) {
            contents.control = deserializeAws_restJson1Control(data.control, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAssessmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteAssessmentFrameworkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAssessmentFrameworkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteAssessmentFrameworkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteAssessmentReportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteAssessmentReportCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteAssessmentReportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteControlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeregisterAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeregisterAccountCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeregisterAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAccountStatusCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAccountStatusCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAccountStatusCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAssessmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessment: undefined,
            userRole: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessment !== undefined && data.assessment !== null) {
            contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
          }
          if (data.userRole !== undefined && data.userRole !== null) {
            contents.userRole = deserializeAws_restJson1Role(data.userRole, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAssessmentFrameworkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAssessmentFrameworkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            framework: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.framework !== undefined && data.framework !== null) {
            contents.framework = deserializeAws_restJson1Framework(data.framework, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAssessmentFrameworkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetAssessmentReportUrlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetAssessmentReportUrlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            preSignedUrl: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.preSignedUrl !== undefined && data.preSignedUrl !== null) {
            contents.preSignedUrl = deserializeAws_restJson1URL(data.preSignedUrl, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetAssessmentReportUrlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetChangeLogsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetChangeLogsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            changeLogs: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.changeLogs !== undefined && data.changeLogs !== null) {
            contents.changeLogs = deserializeAws_restJson1ChangeLogs(data.changeLogs, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetChangeLogsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetControlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            control: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.control !== undefined && data.control !== null) {
            contents.control = deserializeAws_restJson1Control(data.control, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetDelegationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetDelegationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            delegations: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.delegations !== undefined && data.delegations !== null) {
            contents.delegations = deserializeAws_restJson1DelegationMetadataList(data.delegations, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetDelegationsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetEvidenceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetEvidenceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            evidence: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.evidence !== undefined && data.evidence !== null) {
            contents.evidence = deserializeAws_restJson1Evidence(data.evidence, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEvidenceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            evidence: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.evidence !== undefined && data.evidence !== null) {
            contents.evidence = deserializeAws_restJson1EvidenceList(data.evidence, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetEvidenceFolderCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetEvidenceFolderCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            evidenceFolder: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.evidenceFolder !== undefined && data.evidenceFolder !== null) {
            contents.evidenceFolder = deserializeAws_restJson1AssessmentEvidenceFolder(data.evidenceFolder, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEvidenceFolderCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            evidenceFolders: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
            contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            evidenceFolders: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
            contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetOrganizationAdminAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetOrganizationAdminAccountCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            adminAccountId: undefined,
            organizationId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
            contents.adminAccountId = data.adminAccountId;
          }
          if (data.organizationId !== undefined && data.organizationId !== null) {
            contents.organizationId = data.organizationId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetOrganizationAdminAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetServicesInScopeCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetServicesInScopeCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            serviceMetadata: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.serviceMetadata !== undefined && data.serviceMetadata !== null) {
            contents.serviceMetadata = deserializeAws_restJson1ServiceMetadataList(data.serviceMetadata, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetServicesInScopeCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSettingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            settings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.settings !== undefined && data.settings !== null) {
            contents.settings = deserializeAws_restJson1Settings(data.settings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSettingsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListAssessmentFrameworksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAssessmentFrameworksCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            frameworkMetadataList: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.frameworkMetadataList !== undefined && data.frameworkMetadataList !== null) {
            contents.frameworkMetadataList = deserializeAws_restJson1FrameworkMetadataList(
              data.frameworkMetadataList,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAssessmentFrameworksCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListAssessmentReportsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAssessmentReportsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessmentReports: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessmentReports !== undefined && data.assessmentReports !== null) {
            contents.assessmentReports = deserializeAws_restJson1AssessmentReportsMetadata(
              data.assessmentReports,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAssessmentReportsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListAssessmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListAssessmentsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessmentMetadata: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessmentMetadata !== undefined && data.assessmentMetadata !== null) {
            contents.assessmentMetadata = deserializeAws_restJson1ListAssessmentMetadata(
              data.assessmentMetadata,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListAssessmentsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListControlsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListControlsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            controlMetadataList: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.controlMetadataList !== undefined && data.controlMetadataList !== null) {
            contents.controlMetadataList = deserializeAws_restJson1ControlMetadataList(
              data.controlMetadataList,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListControlsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListKeywordsForDataSourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListKeywordsForDataSourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            keywords: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.keywords !== undefined && data.keywords !== null) {
            contents.keywords = deserializeAws_restJson1Keywords(data.keywords, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListKeywordsForDataSourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListNotificationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListNotificationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            nextToken: undefined,
            notifications: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          if (data.notifications !== undefined && data.notifications !== null) {
            contents.notifications = deserializeAws_restJson1Notifications(data.notifications, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListNotificationsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1RegisterAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1RegisterAccountCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            status: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.status !== undefined && data.status !== null) {
            contents.status = data.status;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1RegisterAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1RegisterOrganizationAdminAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            adminAccountId: undefined,
            organizationId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
            contents.adminAccountId = data.adminAccountId;
          }
          if (data.organizationId !== undefined && data.organizationId !== null) {
            contents.organizationId = data.organizationId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAssessmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAssessmentCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessment !== undefined && data.assessment !== null) {
            contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAssessmentCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAssessmentControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAssessmentControlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            control: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.control !== undefined && data.control !== null) {
            contents.control = deserializeAws_restJson1AssessmentControl(data.control, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAssessmentControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            controlSet: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.controlSet !== undefined && data.controlSet !== null) {
            contents.controlSet = deserializeAws_restJson1AssessmentControlSet(data.controlSet, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAssessmentFrameworkCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAssessmentFrameworkCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            framework: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.framework !== undefined && data.framework !== null) {
            contents.framework = deserializeAws_restJson1Framework(data.framework, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAssessmentFrameworkCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateAssessmentStatusCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateAssessmentStatusCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            assessment: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.assessment !== undefined && data.assessment !== null) {
            contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateAssessmentStatusCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateControlCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateControlCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            control: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.control !== undefined && data.control !== null) {
            contents.control = deserializeAws_restJson1Control(data.control, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateControlCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1UpdateSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateSettingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            settings: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.settings !== undefined && data.settings !== null) {
            contents.settings = deserializeAws_restJson1Settings(data.settings, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateSettingsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError(output, context),
            ];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            signatureAlgorithm: undefined,
            signatureDateTime: undefined,
            signatureKeyId: undefined,
            signatureValid: undefined,
            validationErrors: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.signatureAlgorithm !== undefined && data.signatureAlgorithm !== null) {
            contents.signatureAlgorithm = data.signatureAlgorithm;
          }
          if (data.signatureDateTime !== undefined && data.signatureDateTime !== null) {
            contents.signatureDateTime = data.signatureDateTime;
          }
          if (data.signatureKeyId !== undefined && data.signatureKeyId !== null) {
            contents.signatureKeyId = data.signatureKeyId;
          }
          if (data.signatureValid !== undefined && data.signatureValid !== null) {
            contents.signatureValid = data.signatureValid;
          }
          if (data.validationErrors !== undefined && data.validationErrors !== null) {
            contents.validationErrors = deserializeAws_restJson1ValidationErrors(data.validationErrors, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.auditmanager#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.auditmanager#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.auditmanager#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.auditmanager#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
      }
      if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        fields: undefined,
        message: undefined,
        reason: undefined,
      };
      data = parsedOutput.body;
      if (data.fields !== undefined && data.fields !== null) {
        contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
      }
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      if (data.reason !== undefined && data.reason !== null) {
        contents.reason = data.reason;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1AssessmentReportsDestination = function (input, context) {
  return __assign(
    __assign({}, input.destination !== undefined && input.destination !== null && { destination: input.destination }),
    input.destinationType !== undefined && input.destinationType !== null && { destinationType: input.destinationType }
  );
};
var serializeAws_restJson1AWSAccount = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }
      ),
      input.id !== undefined && input.id !== null && { id: input.id }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1AWSAccounts = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AWSAccount(entry, context);
    });
};
var serializeAws_restJson1AWSService = function (input, context) {
  return __assign(
    {},
    input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }
  );
};
var serializeAws_restJson1AWSServices = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AWSService(entry, context);
    });
};
var serializeAws_restJson1ControlMappingSource = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.sourceDescription !== undefined &&
                    input.sourceDescription !== null && { sourceDescription: input.sourceDescription }
                ),
                input.sourceFrequency !== undefined &&
                  input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }
              ),
              input.sourceId !== undefined && input.sourceId !== null && { sourceId: input.sourceId }
            ),
            input.sourceKeyword !== undefined &&
              input.sourceKeyword !== null && {
                sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
              }
          ),
          input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }
        ),
        input.sourceSetUpOption !== undefined &&
          input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }
      ),
      input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }
    ),
    input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }
  );
};
var serializeAws_restJson1ControlMappingSources = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ControlMappingSource(entry, context);
    });
};
var serializeAws_restJson1CreateAssessmentFrameworkControl = function (input, context) {
  return __assign({}, input.id !== undefined && input.id !== null && { id: input.id });
};
var serializeAws_restJson1CreateAssessmentFrameworkControls = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControl(entry, context);
    });
};
var serializeAws_restJson1CreateAssessmentFrameworkControlSet = function (input, context) {
  return __assign(
    __assign(
      {},
      input.controls !== undefined &&
        input.controls !== null && {
          controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
        }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1CreateAssessmentFrameworkControlSets = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControlSet(entry, context);
    });
};
var serializeAws_restJson1CreateControlMappingSource = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.sourceDescription !== undefined &&
                  input.sourceDescription !== null && { sourceDescription: input.sourceDescription }
              ),
              input.sourceFrequency !== undefined &&
                input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }
            ),
            input.sourceKeyword !== undefined &&
              input.sourceKeyword !== null && {
                sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
              }
          ),
          input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }
        ),
        input.sourceSetUpOption !== undefined &&
          input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }
      ),
      input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }
    ),
    input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }
  );
};
var serializeAws_restJson1CreateControlMappingSources = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateControlMappingSource(entry, context);
    });
};
var serializeAws_restJson1CreateDelegationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.comment !== undefined && input.comment !== null && { comment: input.comment }),
        input.controlSetId !== undefined && input.controlSetId !== null && { controlSetId: input.controlSetId }
      ),
      input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }
    ),
    input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }
  );
};
var serializeAws_restJson1CreateDelegationRequests = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CreateDelegationRequest(entry, context);
    });
};
var serializeAws_restJson1DelegationIds = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_restJson1EvidenceIds = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_restJson1ManualEvidence = function (input, context) {
  return __assign(
    {},
    input.s3ResourcePath !== undefined && input.s3ResourcePath !== null && { s3ResourcePath: input.s3ResourcePath }
  );
};
var serializeAws_restJson1ManualEvidenceList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ManualEvidence(entry, context);
    });
};
var serializeAws_restJson1Role = function (input, context) {
  return __assign(
    __assign({}, input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }
  );
};
var serializeAws_restJson1Roles = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Role(entry, context);
    });
};
var serializeAws_restJson1Scope = function (input, context) {
  return __assign(
    __assign(
      {},
      input.awsAccounts !== undefined &&
        input.awsAccounts !== null && { awsAccounts: serializeAws_restJson1AWSAccounts(input.awsAccounts, context) }
    ),
    input.awsServices !== undefined &&
      input.awsServices !== null && { awsServices: serializeAws_restJson1AWSServices(input.awsServices, context) }
  );
};
var serializeAws_restJson1SourceKeyword = function (input, context) {
  return __assign(
    __assign(
      {},
      input.keywordInputType !== undefined &&
        input.keywordInputType !== null && { keywordInputType: input.keywordInputType }
    ),
    input.keywordValue !== undefined && input.keywordValue !== null && { keywordValue: input.keywordValue }
  );
};
var serializeAws_restJson1TagMap = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_restJson1UpdateAssessmentFrameworkControlSet = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.controls !== undefined &&
          input.controls !== null && {
            controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
          }
      ),
      input.id !== undefined && input.id !== null && { id: input.id }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_restJson1UpdateAssessmentFrameworkControlSets = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1UpdateAssessmentFrameworkControlSet(entry, context);
    });
};
var deserializeAws_restJson1Assessment = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    awsAccount:
      output.awsAccount !== undefined && output.awsAccount !== null
        ? deserializeAws_restJson1AWSAccount(output.awsAccount, context)
        : undefined,
    framework:
      output.framework !== undefined && output.framework !== null
        ? deserializeAws_restJson1AssessmentFramework(output.framework, context)
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1AssessmentMetadata(output.metadata, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  };
};
var deserializeAws_restJson1AssessmentControl = function (output, context) {
  return {
    assessmentReportEvidenceCount:
      output.assessmentReportEvidenceCount !== undefined && output.assessmentReportEvidenceCount !== null
        ? output.assessmentReportEvidenceCount
        : undefined,
    comments:
      output.comments !== undefined && output.comments !== null
        ? deserializeAws_restJson1ControlComments(output.comments, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    evidenceCount:
      output.evidenceCount !== undefined && output.evidenceCount !== null ? output.evidenceCount : undefined,
    evidenceSources:
      output.evidenceSources !== undefined && output.evidenceSources !== null
        ? deserializeAws_restJson1EvidenceSources(output.evidenceSources, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    response: output.response !== undefined && output.response !== null ? output.response : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1AssessmentControls = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentControl(entry, context);
    });
};
var deserializeAws_restJson1AssessmentControlSet = function (output, context) {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1AssessmentControls(output.controls, context)
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    manualEvidenceCount:
      output.manualEvidenceCount !== undefined && output.manualEvidenceCount !== null
        ? output.manualEvidenceCount
        : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    systemEvidenceCount:
      output.systemEvidenceCount !== undefined && output.systemEvidenceCount !== null
        ? output.systemEvidenceCount
        : undefined,
  };
};
var deserializeAws_restJson1AssessmentControlSets = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentControlSet(entry, context);
    });
};
var deserializeAws_restJson1AssessmentEvidenceFolder = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentReportSelectionCount:
      output.assessmentReportSelectionCount !== undefined && output.assessmentReportSelectionCount !== null
        ? output.assessmentReportSelectionCount
        : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    controlId: output.controlId !== undefined && output.controlId !== null ? output.controlId : undefined,
    controlName: output.controlName !== undefined && output.controlName !== null ? output.controlName : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    date: output.date !== undefined && output.date !== null ? new Date(Math.round(output.date * 1000)) : undefined,
    evidenceAwsServiceSourceCount:
      output.evidenceAwsServiceSourceCount !== undefined && output.evidenceAwsServiceSourceCount !== null
        ? output.evidenceAwsServiceSourceCount
        : undefined,
    evidenceByTypeComplianceCheckCount:
      output.evidenceByTypeComplianceCheckCount !== undefined && output.evidenceByTypeComplianceCheckCount !== null
        ? output.evidenceByTypeComplianceCheckCount
        : undefined,
    evidenceByTypeComplianceCheckIssuesCount:
      output.evidenceByTypeComplianceCheckIssuesCount !== undefined &&
      output.evidenceByTypeComplianceCheckIssuesCount !== null
        ? output.evidenceByTypeComplianceCheckIssuesCount
        : undefined,
    evidenceByTypeConfigurationDataCount:
      output.evidenceByTypeConfigurationDataCount !== undefined && output.evidenceByTypeConfigurationDataCount !== null
        ? output.evidenceByTypeConfigurationDataCount
        : undefined,
    evidenceByTypeManualCount:
      output.evidenceByTypeManualCount !== undefined && output.evidenceByTypeManualCount !== null
        ? output.evidenceByTypeManualCount
        : undefined,
    evidenceByTypeUserActivityCount:
      output.evidenceByTypeUserActivityCount !== undefined && output.evidenceByTypeUserActivityCount !== null
        ? output.evidenceByTypeUserActivityCount
        : undefined,
    evidenceResourcesIncludedCount:
      output.evidenceResourcesIncludedCount !== undefined && output.evidenceResourcesIncludedCount !== null
        ? output.evidenceResourcesIncludedCount
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    totalEvidence:
      output.totalEvidence !== undefined && output.totalEvidence !== null ? output.totalEvidence : undefined,
  };
};
var deserializeAws_restJson1AssessmentEvidenceFolders = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentEvidenceFolder(entry, context);
    });
};
var deserializeAws_restJson1AssessmentFramework = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1AssessmentControlSets(output.controlSets, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1FrameworkMetadata(output.metadata, context)
        : undefined,
  };
};
var deserializeAws_restJson1AssessmentFrameworkMetadata = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    controlSetsCount:
      output.controlSetsCount !== undefined && output.controlSetsCount !== null ? output.controlSetsCount : undefined,
    controlsCount:
      output.controlsCount !== undefined && output.controlsCount !== null ? output.controlsCount : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1AssessmentMetadata = function (output, context) {
  return {
    assessmentReportsDestination:
      output.assessmentReportsDestination !== undefined && output.assessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.assessmentReportsDestination, context)
        : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    scope:
      output.scope !== undefined && output.scope !== null
        ? deserializeAws_restJson1Scope(output.scope, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1AssessmentMetadataItem = function (output, context) {
  return {
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1AssessmentReport = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1AssessmentReportEvidenceError = function (output, context) {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    evidenceId: output.evidenceId !== undefined && output.evidenceId !== null ? output.evidenceId : undefined,
  };
};
var deserializeAws_restJson1AssessmentReportEvidenceErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentReportEvidenceError(entry, context);
    });
};
var deserializeAws_restJson1AssessmentReportMetadata = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    author: output.author !== undefined && output.author !== null ? output.author : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1AssessmentReportsDestination = function (output, context) {
  return {
    destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
    destinationType:
      output.destinationType !== undefined && output.destinationType !== null ? output.destinationType : undefined,
  };
};
var deserializeAws_restJson1AssessmentReportsMetadata = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentReportMetadata(entry, context);
    });
};
var deserializeAws_restJson1AWSAccount = function (output, context) {
  return {
    emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1AWSAccounts = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AWSAccount(entry, context);
    });
};
var deserializeAws_restJson1AWSService = function (output, context) {
  return {
    serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
  };
};
var deserializeAws_restJson1AWSServices = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AWSService(entry, context);
    });
};
var deserializeAws_restJson1BatchCreateDelegationByAssessmentError = function (output, context) {
  return {
    createDelegationRequest:
      output.createDelegationRequest !== undefined && output.createDelegationRequest !== null
        ? deserializeAws_restJson1CreateDelegationRequest(output.createDelegationRequest, context)
        : undefined,
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  };
};
var deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchCreateDelegationByAssessmentError(entry, context);
    });
};
var deserializeAws_restJson1BatchDeleteDelegationByAssessmentError = function (output, context) {
  return {
    delegationId: output.delegationId !== undefined && output.delegationId !== null ? output.delegationId : undefined,
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  };
};
var deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchDeleteDelegationByAssessmentError(entry, context);
    });
};
var deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError = function (output, context) {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    manualEvidence:
      output.manualEvidence !== undefined && output.manualEvidence !== null
        ? deserializeAws_restJson1ManualEvidence(output.manualEvidence, context)
        : undefined,
  };
};
var deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError(entry, context);
    });
};
var deserializeAws_restJson1ChangeLog = function (output, context) {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    objectName: output.objectName !== undefined && output.objectName !== null ? output.objectName : undefined,
    objectType: output.objectType !== undefined && output.objectType !== null ? output.objectType : undefined,
  };
};
var deserializeAws_restJson1ChangeLogs = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ChangeLog(entry, context);
    });
};
var deserializeAws_restJson1Control = function (output, context) {
  return {
    actionPlanInstructions:
      output.actionPlanInstructions !== undefined && output.actionPlanInstructions !== null
        ? output.actionPlanInstructions
        : undefined,
    actionPlanTitle:
      output.actionPlanTitle !== undefined && output.actionPlanTitle !== null ? output.actionPlanTitle : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlMappingSources:
      output.controlMappingSources !== undefined && output.controlMappingSources !== null
        ? deserializeAws_restJson1ControlMappingSources(output.controlMappingSources, context)
        : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    testingInformation:
      output.testingInformation !== undefined && output.testingInformation !== null
        ? output.testingInformation
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1ControlComment = function (output, context) {
  return {
    authorName: output.authorName !== undefined && output.authorName !== null ? output.authorName : undefined,
    commentBody: output.commentBody !== undefined && output.commentBody !== null ? output.commentBody : undefined,
    postedDate:
      output.postedDate !== undefined && output.postedDate !== null
        ? new Date(Math.round(output.postedDate * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1ControlComments = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlComment(entry, context);
    });
};
var deserializeAws_restJson1ControlMappingSource = function (output, context) {
  return {
    sourceDescription:
      output.sourceDescription !== undefined && output.sourceDescription !== null
        ? output.sourceDescription
        : undefined,
    sourceFrequency:
      output.sourceFrequency !== undefined && output.sourceFrequency !== null ? output.sourceFrequency : undefined,
    sourceId: output.sourceId !== undefined && output.sourceId !== null ? output.sourceId : undefined,
    sourceKeyword:
      output.sourceKeyword !== undefined && output.sourceKeyword !== null
        ? deserializeAws_restJson1SourceKeyword(output.sourceKeyword, context)
        : undefined,
    sourceName: output.sourceName !== undefined && output.sourceName !== null ? output.sourceName : undefined,
    sourceSetUpOption:
      output.sourceSetUpOption !== undefined && output.sourceSetUpOption !== null
        ? output.sourceSetUpOption
        : undefined,
    sourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
    troubleshootingText:
      output.troubleshootingText !== undefined && output.troubleshootingText !== null
        ? output.troubleshootingText
        : undefined,
  };
};
var deserializeAws_restJson1ControlMappingSources = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlMappingSource(entry, context);
    });
};
var deserializeAws_restJson1ControlMetadata = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1ControlMetadataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlMetadata(entry, context);
    });
};
var deserializeAws_restJson1Controls = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Control(entry, context);
    });
};
var deserializeAws_restJson1ControlSet = function (output, context) {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1Controls(output.controls, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1ControlSets = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ControlSet(entry, context);
    });
};
var deserializeAws_restJson1CreateDelegationRequest = function (output, context) {
  return {
    comment: output.comment !== undefined && output.comment !== null ? output.comment : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
  };
};
var deserializeAws_restJson1Delegation = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    comment: output.comment !== undefined && output.comment !== null ? output.comment : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1DelegationMetadata = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    controlSetName:
      output.controlSetName !== undefined && output.controlSetName !== null ? output.controlSetName : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_restJson1DelegationMetadataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DelegationMetadata(entry, context);
    });
};
var deserializeAws_restJson1Delegations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Delegation(entry, context);
    });
};
var deserializeAws_restJson1Evidence = function (output, context) {
  return {
    assessmentReportSelection:
      output.assessmentReportSelection !== undefined && output.assessmentReportSelection !== null
        ? output.assessmentReportSelection
        : undefined,
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1EvidenceAttributes(output.attributes, context)
        : undefined,
    awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
    awsOrganization:
      output.awsOrganization !== undefined && output.awsOrganization !== null ? output.awsOrganization : undefined,
    complianceCheck:
      output.complianceCheck !== undefined && output.complianceCheck !== null ? output.complianceCheck : undefined,
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
    eventSource: output.eventSource !== undefined && output.eventSource !== null ? output.eventSource : undefined,
    evidenceAwsAccountId:
      output.evidenceAwsAccountId !== undefined && output.evidenceAwsAccountId !== null
        ? output.evidenceAwsAccountId
        : undefined,
    evidenceByType:
      output.evidenceByType !== undefined && output.evidenceByType !== null ? output.evidenceByType : undefined,
    evidenceFolderId:
      output.evidenceFolderId !== undefined && output.evidenceFolderId !== null ? output.evidenceFolderId : undefined,
    iamId: output.iamId !== undefined && output.iamId !== null ? output.iamId : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    resourcesIncluded:
      output.resourcesIncluded !== undefined && output.resourcesIncluded !== null
        ? deserializeAws_restJson1Resources(output.resourcesIncluded, context)
        : undefined,
    time: output.time !== undefined && output.time !== null ? new Date(Math.round(output.time * 1000)) : undefined,
  };
};
var deserializeAws_restJson1EvidenceAttributes = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1EvidenceIds = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1EvidenceList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Evidence(entry, context);
    });
};
var deserializeAws_restJson1EvidenceSources = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1Framework = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1ControlSets(output.controlSets, context)
        : undefined,
    controlSources:
      output.controlSources !== undefined && output.controlSources !== null ? output.controlSources : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_restJson1FrameworkMetadata = function (output, context) {
  return {
    complianceType:
      output.complianceType !== undefined && output.complianceType !== null ? output.complianceType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    logo: output.logo !== undefined && output.logo !== null ? output.logo : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1FrameworkMetadataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentFrameworkMetadata(entry, context);
    });
};
var deserializeAws_restJson1Keywords = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1ListAssessmentMetadata = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AssessmentMetadataItem(entry, context);
    });
};
var deserializeAws_restJson1ManualEvidence = function (output, context) {
  return {
    s3ResourcePath:
      output.s3ResourcePath !== undefined && output.s3ResourcePath !== null ? output.s3ResourcePath : undefined,
  };
};
var deserializeAws_restJson1Notification = function (output, context) {
  return {
    assessmentId: output.assessmentId !== undefined && output.assessmentId !== null ? output.assessmentId : undefined,
    assessmentName:
      output.assessmentName !== undefined && output.assessmentName !== null ? output.assessmentName : undefined,
    controlSetId: output.controlSetId !== undefined && output.controlSetId !== null ? output.controlSetId : undefined,
    controlSetName:
      output.controlSetName !== undefined && output.controlSetName !== null ? output.controlSetName : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    eventTime:
      output.eventTime !== undefined && output.eventTime !== null
        ? new Date(Math.round(output.eventTime * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    source: output.source !== undefined && output.source !== null ? output.source : undefined,
  };
};
var deserializeAws_restJson1Notifications = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Notification(entry, context);
    });
};
var deserializeAws_restJson1Resource = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_restJson1Resources = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};
var deserializeAws_restJson1Role = function (output, context) {
  return {
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    roleType: output.roleType !== undefined && output.roleType !== null ? output.roleType : undefined,
  };
};
var deserializeAws_restJson1Roles = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Role(entry, context);
    });
};
var deserializeAws_restJson1Scope = function (output, context) {
  return {
    awsAccounts:
      output.awsAccounts !== undefined && output.awsAccounts !== null
        ? deserializeAws_restJson1AWSAccounts(output.awsAccounts, context)
        : undefined,
    awsServices:
      output.awsServices !== undefined && output.awsServices !== null
        ? deserializeAws_restJson1AWSServices(output.awsServices, context)
        : undefined,
  };
};
var deserializeAws_restJson1ServiceMetadata = function (output, context) {
  return {
    category: output.category !== undefined && output.category !== null ? output.category : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1ServiceMetadataList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ServiceMetadata(entry, context);
    });
};
var deserializeAws_restJson1Settings = function (output, context) {
  return {
    defaultAssessmentReportsDestination:
      output.defaultAssessmentReportsDestination !== undefined && output.defaultAssessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.defaultAssessmentReportsDestination, context)
        : undefined,
    defaultProcessOwners:
      output.defaultProcessOwners !== undefined && output.defaultProcessOwners !== null
        ? deserializeAws_restJson1Roles(output.defaultProcessOwners, context)
        : undefined,
    isAwsOrgEnabled:
      output.isAwsOrgEnabled !== undefined && output.isAwsOrgEnabled !== null ? output.isAwsOrgEnabled : undefined,
    kmsKey: output.kmsKey !== undefined && output.kmsKey !== null ? output.kmsKey : undefined,
    snsTopic: output.snsTopic !== undefined && output.snsTopic !== null ? output.snsTopic : undefined,
  };
};
var deserializeAws_restJson1SourceKeyword = function (output, context) {
  return {
    keywordInputType:
      output.keywordInputType !== undefined && output.keywordInputType !== null ? output.keywordInputType : undefined,
    keywordValue: output.keywordValue !== undefined && output.keywordValue !== null ? output.keywordValue : undefined,
  };
};
var deserializeAws_restJson1TagMap = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_restJson1URL = function (output, context) {
  return {
    hyperlinkName:
      output.hyperlinkName !== undefined && output.hyperlinkName !== null ? output.hyperlinkName : undefined,
    link: output.link !== undefined && output.link !== null ? output.link : undefined,
  };
};
var deserializeAws_restJson1ValidationErrors = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_restJson1ValidationExceptionField = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1ValidationExceptionFieldList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var isSerializableHeaderValue = function (value) {
  return (
    value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
  var findKey = function (object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function (rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
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
