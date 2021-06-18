import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateBackupPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup/plans";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.BackupPlan !== undefined &&
                    input.BackupPlan !== null && {
                      BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context),
                    }
                ),
                input.BackupPlanTags !== undefined &&
                  input.BackupPlanTags !== null && {
                    BackupPlanTags: serializeAws_restJson1Tags(input.BackupPlanTags, context),
                  }
              ),
              input.CreatorRequestId !== undefined &&
                input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }
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
export var serializeAws_restJson1CreateBackupSelectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup/plans/{BackupPlanId}/selections";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.BackupSelection !== undefined &&
                  input.BackupSelection !== null && {
                    BackupSelection: serializeAws_restJson1BackupSelection(input.BackupSelection, context),
                  }
              ),
              input.CreatorRequestId !== undefined &&
                input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }
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
export var serializeAws_restJson1CreateBackupVaultCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup-vaults/{BackupVaultName}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.BackupVaultTags !== undefined &&
                    input.BackupVaultTags !== null && {
                      BackupVaultTags: serializeAws_restJson1Tags(input.BackupVaultTags, context),
                    }
                ),
                input.CreatorRequestId !== undefined &&
                  input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }
              ),
              input.EncryptionKeyArn !== undefined &&
                input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }
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
export var serializeAws_restJson1DeleteBackupPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
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
export var serializeAws_restJson1DeleteBackupSelectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          if (input.SelectionId !== undefined) {
            labelValue = input.SelectionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: SelectionId.");
            }
            resolvedPath = resolvedPath.replace("{SelectionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: SelectionId.");
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
export var serializeAws_restJson1DeleteBackupVaultCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1DeleteBackupVaultNotificationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1DeleteRecoveryPointCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          if (input.RecoveryPointArn !== undefined) {
            labelValue = input.RecoveryPointArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
            }
            resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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
export var serializeAws_restJson1DescribeBackupJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-jobs/{BackupJobId}";
          if (input.BackupJobId !== undefined) {
            labelValue = input.BackupJobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupJobId.");
            }
            resolvedPath = resolvedPath.replace("{BackupJobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupJobId.");
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
export var serializeAws_restJson1DescribeBackupVaultCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1DescribeCopyJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/copy-jobs/{CopyJobId}";
          if (input.CopyJobId !== undefined) {
            labelValue = input.CopyJobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: CopyJobId.");
            }
            resolvedPath = resolvedPath.replace("{CopyJobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: CopyJobId.");
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
export var serializeAws_restJson1DescribeGlobalSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/global-settings";
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
export var serializeAws_restJson1DescribeProtectedResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/resources/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
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
export var serializeAws_restJson1DescribeRecoveryPointCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          if (input.RecoveryPointArn !== undefined) {
            labelValue = input.RecoveryPointArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
            }
            resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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
export var serializeAws_restJson1DescribeRegionSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account-settings";
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
export var serializeAws_restJson1DescribeRestoreJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restore-jobs/{RestoreJobId}";
          if (input.RestoreJobId !== undefined) {
            labelValue = input.RestoreJobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RestoreJobId.");
            }
            resolvedPath = resolvedPath.replace("{RestoreJobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RestoreJobId.");
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
export var serializeAws_restJson1DisassociateRecoveryPointCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          if (input.RecoveryPointArn !== undefined) {
            labelValue = input.RecoveryPointArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
            }
            resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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
export var serializeAws_restJson1ExportBackupPlanTemplateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}/toTemplate";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
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
export var serializeAws_restJson1GetBackupPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          query = __assign({}, input.VersionId !== undefined && { versionId: input.VersionId });
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
export var serializeAws_restJson1GetBackupPlanFromJSONCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup/template/json/toPlan";
          body = JSON.stringify(
            __assign(
              {},
              input.BackupPlanTemplateJson !== undefined &&
                input.BackupPlanTemplateJson !== null && { BackupPlanTemplateJson: input.BackupPlanTemplateJson }
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
export var serializeAws_restJson1GetBackupPlanFromTemplateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/template/plans/{BackupPlanTemplateId}/toPlan";
          if (input.BackupPlanTemplateId !== undefined) {
            labelValue = input.BackupPlanTemplateId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanTemplateId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanTemplateId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanTemplateId.");
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
export var serializeAws_restJson1GetBackupSelectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          if (input.SelectionId !== undefined) {
            labelValue = input.SelectionId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: SelectionId.");
            }
            resolvedPath = resolvedPath.replace("{SelectionId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: SelectionId.");
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
export var serializeAws_restJson1GetBackupVaultAccessPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1GetBackupVaultNotificationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
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
export var serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          if (input.RecoveryPointArn !== undefined) {
            labelValue = input.RecoveryPointArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
            }
            resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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
export var serializeAws_restJson1GetSupportedResourceTypesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/supported-resource-types";
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
export var serializeAws_restJson1ListBackupJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-jobs";
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
                          input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
                        ),
                        input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }
                      ),
                      input.ByState !== undefined && { state: input.ByState }
                    ),
                    input.ByBackupVaultName !== undefined && { backupVaultName: input.ByBackupVaultName }
                  ),
                  input.ByCreatedBefore !== undefined && {
                    createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
                  }
                ),
                input.ByCreatedAfter !== undefined && {
                  createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
                }
              ),
              input.ByResourceType !== undefined && { resourceType: input.ByResourceType }
            ),
            input.ByAccountId !== undefined && { accountId: input.ByAccountId }
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
export var serializeAws_restJson1ListBackupPlansCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans";
          query = __assign(
            __assign(
              __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
              input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
            ),
            input.IncludeDeleted !== undefined && { includeDeleted: input.IncludeDeleted.toString() }
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
export var serializeAws_restJson1ListBackupPlanTemplatesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/template/plans";
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListBackupPlanVersionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}/versions";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListBackupSelectionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup/plans/{BackupPlanId}/selections";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListBackupVaultsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults";
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListCopyJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/copy-jobs";
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
                          input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
                        ),
                        input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }
                      ),
                      input.ByState !== undefined && { state: input.ByState }
                    ),
                    input.ByCreatedBefore !== undefined && {
                      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
                    }
                  ),
                  input.ByCreatedAfter !== undefined && {
                    createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
                  }
                ),
                input.ByResourceType !== undefined && { resourceType: input.ByResourceType }
              ),
              input.ByDestinationVaultArn !== undefined && { destinationVaultArn: input.ByDestinationVaultArn }
            ),
            input.ByAccountId !== undefined && { accountId: input.ByAccountId }
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
export var serializeAws_restJson1ListProtectedResourcesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/resources";
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
                      input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
                    ),
                    input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }
                  ),
                  input.ByResourceType !== undefined && { resourceType: input.ByResourceType }
                ),
                input.ByBackupPlanId !== undefined && { backupPlanId: input.ByBackupPlanId }
              ),
              input.ByCreatedBefore !== undefined && {
                createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
              }
            ),
            input.ByCreatedAfter !== undefined && {
              createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
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
export var serializeAws_restJson1ListRecoveryPointsByResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/resources/{ResourceArn}/recovery-points";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1ListRestoreJobsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/restore-jobs";
          query = __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
                    input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
                  ),
                  input.ByAccountId !== undefined && { accountId: input.ByAccountId }
                ),
                input.ByCreatedBefore !== undefined && {
                  createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
                }
              ),
              input.ByCreatedAfter !== undefined && {
                createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
              }
            ),
            input.ByStatus !== undefined && { status: input.ByStatus }
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
export var serializeAws_restJson1ListTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          query = __assign(
            __assign({}, input.NextToken !== undefined && { nextToken: input.NextToken }),
            input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }
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
export var serializeAws_restJson1PutBackupVaultAccessPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          body = JSON.stringify(
            __assign({}, input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })
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
export var serializeAws_restJson1PutBackupVaultNotificationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup-vaults/{BackupVaultName}/notification-configuration";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.BackupVaultEvents !== undefined &&
                  input.BackupVaultEvents !== null && {
                    BackupVaultEvents: serializeAws_restJson1BackupVaultEvents(input.BackupVaultEvents, context),
                  }
              ),
              input.SNSTopicArn !== undefined && input.SNSTopicArn !== null && { SNSTopicArn: input.SNSTopicArn }
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
export var serializeAws_restJson1StartBackupJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup-jobs";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              {},
                              input.BackupOptions !== undefined &&
                                input.BackupOptions !== null && {
                                  BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
                                }
                            ),
                            input.BackupVaultName !== undefined &&
                              input.BackupVaultName !== null && { BackupVaultName: input.BackupVaultName }
                          ),
                          input.CompleteWindowMinutes !== undefined &&
                            input.CompleteWindowMinutes !== null && {
                              CompleteWindowMinutes: input.CompleteWindowMinutes,
                            }
                        ),
                        input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
                      ),
                      input.IdempotencyToken !== undefined &&
                        input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
                    ),
                    input.Lifecycle !== undefined &&
                      input.Lifecycle !== null && {
                        Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context),
                      }
                  ),
                  input.RecoveryPointTags !== undefined &&
                    input.RecoveryPointTags !== null && {
                      RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
                    }
                ),
                input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
              ),
              input.StartWindowMinutes !== undefined &&
                input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }
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
export var serializeAws_restJson1StartCopyJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/copy-jobs";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.DestinationBackupVaultArn !== undefined &&
                          input.DestinationBackupVaultArn !== null && {
                            DestinationBackupVaultArn: input.DestinationBackupVaultArn,
                          }
                      ),
                      input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
                    ),
                    input.IdempotencyToken !== undefined &&
                      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
                  ),
                  input.Lifecycle !== undefined &&
                    input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }
                ),
                input.RecoveryPointArn !== undefined &&
                  input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }
              ),
              input.SourceBackupVaultName !== undefined &&
                input.SourceBackupVaultName !== null && { SourceBackupVaultName: input.SourceBackupVaultName }
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
export var serializeAws_restJson1StartRestoreJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/restore-jobs";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }
                    ),
                    input.IdempotencyToken !== undefined &&
                      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
                  ),
                  input.Metadata !== undefined &&
                    input.Metadata !== null && { Metadata: serializeAws_restJson1Metadata(input.Metadata, context) }
                ),
                input.RecoveryPointArn !== undefined &&
                  input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }
              ),
              input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }
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
export var serializeAws_restJson1StopBackupJobCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/backup-jobs/{BackupJobId}";
          if (input.BackupJobId !== undefined) {
            labelValue = input.BackupJobId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupJobId.");
            }
            resolvedPath = resolvedPath.replace("{BackupJobId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupJobId.");
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
          resolvedPath = "/tags/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.Tags !== undefined &&
                input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }
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
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/untag/{ResourceArn}";
          if (input.ResourceArn !== undefined) {
            labelValue = input.ResourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: ResourceArn.");
            }
            resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: ResourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.TagKeyList !== undefined &&
                input.TagKeyList !== null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }
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
export var serializeAws_restJson1UpdateBackupPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup/plans/{BackupPlanId}";
          if (input.BackupPlanId !== undefined) {
            labelValue = input.BackupPlanId;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
            }
            resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupPlanId.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.BackupPlan !== undefined &&
                input.BackupPlan !== null && {
                  BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context),
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
export var serializeAws_restJson1UpdateGlobalSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/global-settings";
          body = JSON.stringify(
            __assign(
              {},
              input.GlobalSettings !== undefined &&
                input.GlobalSettings !== null && {
                  GlobalSettings: serializeAws_restJson1GlobalSettings(input.GlobalSettings, context),
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
export var serializeAws_restJson1UpdateRecoveryPointLifecycleCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
          if (input.BackupVaultName !== undefined) {
            labelValue = input.BackupVaultName;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
            }
            resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: BackupVaultName.");
          }
          if (input.RecoveryPointArn !== undefined) {
            labelValue = input.RecoveryPointArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
            }
            resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.Lifecycle !== undefined &&
                input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }
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
export var serializeAws_restJson1UpdateRegionSettingsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/account-settings";
          body = JSON.stringify(
            __assign(
              {},
              input.ResourceTypeOptInPreference !== undefined &&
                input.ResourceTypeOptInPreference !== null && {
                  ResourceTypeOptInPreference: serializeAws_restJson1ResourceTypeOptInPreference(
                    input.ResourceTypeOptInPreference,
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
export var deserializeAws_restJson1CreateBackupPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackupPlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AdvancedBackupSettings: undefined,
            BackupPlanArn: undefined,
            BackupPlanId: undefined,
            CreationDate: undefined,
            VersionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
            contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
              data.AdvancedBackupSettings,
              context
            );
          }
          if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
            contents.BackupPlanArn = data.BackupPlanArn;
          }
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.VersionId !== undefined && data.VersionId !== null) {
            contents.VersionId = data.VersionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackupPlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateBackupSelectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackupSelectionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanId: undefined,
            CreationDate: undefined,
            SelectionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.SelectionId !== undefined && data.SelectionId !== null) {
            contents.SelectionId = data.SelectionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackupSelectionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1CreateBackupVaultCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateBackupVaultCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            BackupVaultName: undefined,
            CreationDate: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateBackupVaultCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AlreadyExistsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#AlreadyExistsException":
              return [3 /*break*/, 2];
            case "InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteBackupPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackupPlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanArn: undefined,
            BackupPlanId: undefined,
            DeletionDate: undefined,
            VersionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
            contents.BackupPlanArn = data.BackupPlanArn;
          }
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
            contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
          }
          if (data.VersionId !== undefined && data.VersionId !== null) {
            contents.VersionId = data.VersionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteBackupPlanCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteBackupSelectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackupSelectionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBackupSelectionCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackupVaultCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackupVaultCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBackupVaultCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBackupVaultNotificationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError(output, context)];
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
var deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRecoveryPointCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteRecoveryPointCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRecoveryPointCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidResourceStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#InvalidResourceStateException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeBackupJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeBackupJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AccountId: undefined,
            BackupJobId: undefined,
            BackupOptions: undefined,
            BackupSizeInBytes: undefined,
            BackupType: undefined,
            BackupVaultArn: undefined,
            BackupVaultName: undefined,
            BytesTransferred: undefined,
            CompletionDate: undefined,
            CreatedBy: undefined,
            CreationDate: undefined,
            ExpectedCompletionDate: undefined,
            IamRoleArn: undefined,
            PercentDone: undefined,
            RecoveryPointArn: undefined,
            ResourceArn: undefined,
            ResourceType: undefined,
            StartBy: undefined,
            State: undefined,
            StatusMessage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AccountId !== undefined && data.AccountId !== null) {
            contents.AccountId = data.AccountId;
          }
          if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
            contents.BackupJobId = data.BackupJobId;
          }
          if (data.BackupOptions !== undefined && data.BackupOptions !== null) {
            contents.BackupOptions = deserializeAws_restJson1BackupOptions(data.BackupOptions, context);
          }
          if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
            contents.BackupSizeInBytes = data.BackupSizeInBytes;
          }
          if (data.BackupType !== undefined && data.BackupType !== null) {
            contents.BackupType = data.BackupType;
          }
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.BytesTransferred !== undefined && data.BytesTransferred !== null) {
            contents.BytesTransferred = data.BytesTransferred;
          }
          if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
            contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
          }
          if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
            contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.ExpectedCompletionDate !== undefined && data.ExpectedCompletionDate !== null) {
            contents.ExpectedCompletionDate = new Date(Math.round(data.ExpectedCompletionDate * 1000));
          }
          if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
            contents.IamRoleArn = data.IamRoleArn;
          }
          if (data.PercentDone !== undefined && data.PercentDone !== null) {
            contents.PercentDone = data.PercentDone;
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
            contents.ResourceArn = data.ResourceArn;
          }
          if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
          }
          if (data.StartBy !== undefined && data.StartBy !== null) {
            contents.StartBy = new Date(Math.round(data.StartBy * 1000));
          }
          if (data.State !== undefined && data.State !== null) {
            contents.State = data.State;
          }
          if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
            contents.StatusMessage = data.StatusMessage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeBackupJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DependencyFailureException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#DependencyFailureException":
              return [3 /*break*/, 2];
            case "InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DescribeBackupVaultCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeBackupVaultCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            BackupVaultName: undefined,
            CreationDate: undefined,
            CreatorRequestId: undefined,
            EncryptionKeyArn: undefined,
            NumberOfRecoveryPoints: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
            contents.CreatorRequestId = data.CreatorRequestId;
          }
          if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
            contents.EncryptionKeyArn = data.EncryptionKeyArn;
          }
          if (data.NumberOfRecoveryPoints !== undefined && data.NumberOfRecoveryPoints !== null) {
            contents.NumberOfRecoveryPoints = data.NumberOfRecoveryPoints;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeBackupVaultCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeCopyJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeCopyJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CopyJob: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.CopyJob !== undefined && data.CopyJob !== null) {
            contents.CopyJob = deserializeAws_restJson1CopyJob(data.CopyJob, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeCopyJobCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeGlobalSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeGlobalSettingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            GlobalSettings: undefined,
            LastUpdateTime: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.GlobalSettings !== undefined && data.GlobalSettings !== null) {
            contents.GlobalSettings = deserializeAws_restJson1GlobalSettings(data.GlobalSettings, context);
          }
          if (data.LastUpdateTime !== undefined && data.LastUpdateTime !== null) {
            contents.LastUpdateTime = new Date(Math.round(data.LastUpdateTime * 1000));
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeGlobalSettingsCommandError = function (output, context) {
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
            case "InvalidRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeProtectedResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeProtectedResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            LastBackupTime: undefined,
            ResourceArn: undefined,
            ResourceType: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.LastBackupTime !== undefined && data.LastBackupTime !== null) {
            contents.LastBackupTime = new Date(Math.round(data.LastBackupTime * 1000));
          }
          if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
            contents.ResourceArn = data.ResourceArn;
          }
          if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeProtectedResourceCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRecoveryPointCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeRecoveryPointCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupSizeInBytes: undefined,
            BackupVaultArn: undefined,
            BackupVaultName: undefined,
            CalculatedLifecycle: undefined,
            CompletionDate: undefined,
            CreatedBy: undefined,
            CreationDate: undefined,
            EncryptionKeyArn: undefined,
            IamRoleArn: undefined,
            IsEncrypted: undefined,
            LastRestoreTime: undefined,
            Lifecycle: undefined,
            RecoveryPointArn: undefined,
            ResourceArn: undefined,
            ResourceType: undefined,
            SourceBackupVaultArn: undefined,
            Status: undefined,
            StorageClass: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
            contents.BackupSizeInBytes = data.BackupSizeInBytes;
          }
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
            contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(
              data.CalculatedLifecycle,
              context
            );
          }
          if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
            contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
          }
          if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
            contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
            contents.EncryptionKeyArn = data.EncryptionKeyArn;
          }
          if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
            contents.IamRoleArn = data.IamRoleArn;
          }
          if (data.IsEncrypted !== undefined && data.IsEncrypted !== null) {
            contents.IsEncrypted = data.IsEncrypted;
          }
          if (data.LastRestoreTime !== undefined && data.LastRestoreTime !== null) {
            contents.LastRestoreTime = new Date(Math.round(data.LastRestoreTime * 1000));
          }
          if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
            contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
            contents.ResourceArn = data.ResourceArn;
          }
          if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
          }
          if (data.SourceBackupVaultArn !== undefined && data.SourceBackupVaultArn !== null) {
            contents.SourceBackupVaultArn = data.SourceBackupVaultArn;
          }
          if (data.Status !== undefined && data.Status !== null) {
            contents.Status = data.Status;
          }
          if (data.StorageClass !== undefined && data.StorageClass !== null) {
            contents.StorageClass = data.StorageClass;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeRecoveryPointCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRegionSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeRegionSettingsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ResourceTypeOptInPreference: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ResourceTypeOptInPreference !== undefined && data.ResourceTypeOptInPreference !== null) {
            contents.ResourceTypeOptInPreference = deserializeAws_restJson1ResourceTypeOptInPreference(
              data.ResourceTypeOptInPreference,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeRegionSettingsCommandError = function (output, context) {
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
            case "ServiceUnavailableException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRestoreJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeRestoreJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AccountId: undefined,
            BackupSizeInBytes: undefined,
            CompletionDate: undefined,
            CreatedResourceArn: undefined,
            CreationDate: undefined,
            ExpectedCompletionTimeMinutes: undefined,
            IamRoleArn: undefined,
            PercentDone: undefined,
            RecoveryPointArn: undefined,
            ResourceType: undefined,
            RestoreJobId: undefined,
            Status: undefined,
            StatusMessage: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AccountId !== undefined && data.AccountId !== null) {
            contents.AccountId = data.AccountId;
          }
          if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
            contents.BackupSizeInBytes = data.BackupSizeInBytes;
          }
          if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
            contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
          }
          if (data.CreatedResourceArn !== undefined && data.CreatedResourceArn !== null) {
            contents.CreatedResourceArn = data.CreatedResourceArn;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.ExpectedCompletionTimeMinutes !== undefined && data.ExpectedCompletionTimeMinutes !== null) {
            contents.ExpectedCompletionTimeMinutes = data.ExpectedCompletionTimeMinutes;
          }
          if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
            contents.IamRoleArn = data.IamRoleArn;
          }
          if (data.PercentDone !== undefined && data.PercentDone !== null) {
            contents.PercentDone = data.PercentDone;
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
          }
          if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
            contents.RestoreJobId = data.RestoreJobId;
          }
          if (data.Status !== undefined && data.Status !== null) {
            contents.Status = data.Status;
          }
          if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
            contents.StatusMessage = data.StatusMessage;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeRestoreJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "DependencyFailureException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#DependencyFailureException":
              return [3 /*break*/, 2];
            case "InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1DisassociateRecoveryPointCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DisassociateRecoveryPointCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateRecoveryPointCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidResourceStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#InvalidResourceStateException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1ExportBackupPlanTemplateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ExportBackupPlanTemplateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanTemplateJson: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanTemplateJson !== undefined && data.BackupPlanTemplateJson !== null) {
            contents.BackupPlanTemplateJson = data.BackupPlanTemplateJson;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ExportBackupPlanTemplateCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackupPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupPlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AdvancedBackupSettings: undefined,
            BackupPlan: undefined,
            BackupPlanArn: undefined,
            BackupPlanId: undefined,
            CreationDate: undefined,
            CreatorRequestId: undefined,
            DeletionDate: undefined,
            LastExecutionDate: undefined,
            VersionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
            contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
              data.AdvancedBackupSettings,
              context
            );
          }
          if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
            contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
          }
          if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
            contents.BackupPlanArn = data.BackupPlanArn;
          }
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
            contents.CreatorRequestId = data.CreatorRequestId;
          }
          if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
            contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
          }
          if (data.LastExecutionDate !== undefined && data.LastExecutionDate !== null) {
            contents.LastExecutionDate = new Date(Math.round(data.LastExecutionDate * 1000));
          }
          if (data.VersionId !== undefined && data.VersionId !== null) {
            contents.VersionId = data.VersionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupPlanCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackupPlanFromJSONCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupPlanFromJSONCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlan: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
            contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupPlanFromJSONCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1GetBackupPlanFromTemplateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupPlanFromTemplateCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanDocument: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanDocument !== undefined && data.BackupPlanDocument !== null) {
            contents.BackupPlanDocument = deserializeAws_restJson1BackupPlan(data.BackupPlanDocument, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupPlanFromTemplateCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackupSelectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupSelectionCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanId: undefined,
            BackupSelection: undefined,
            CreationDate: undefined,
            CreatorRequestId: undefined,
            SelectionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.BackupSelection !== undefined && data.BackupSelection !== null) {
            contents.BackupSelection = deserializeAws_restJson1BackupSelection(data.BackupSelection, context);
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
            contents.CreatorRequestId = data.CreatorRequestId;
          }
          if (data.SelectionId !== undefined && data.SelectionId !== null) {
            contents.SelectionId = data.SelectionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupSelectionCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackupVaultAccessPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            BackupVaultName: undefined,
            Policy: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.Policy !== undefined && data.Policy !== null) {
            contents.Policy = data.Policy;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBackupVaultNotificationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetBackupVaultNotificationsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            BackupVaultEvents: undefined,
            BackupVaultName: undefined,
            SNSTopicArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.BackupVaultEvents !== undefined && data.BackupVaultEvents !== null) {
            contents.BackupVaultEvents = deserializeAws_restJson1BackupVaultEvents(data.BackupVaultEvents, context);
          }
          if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
            contents.BackupVaultName = data.BackupVaultName;
          }
          if (data.SNSTopicArn !== undefined && data.SNSTopicArn !== null) {
            contents.SNSTopicArn = data.SNSTopicArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetBackupVaultNotificationsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            RecoveryPointArn: undefined,
            RestoreMetadata: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          if (data.RestoreMetadata !== undefined && data.RestoreMetadata !== null) {
            contents.RestoreMetadata = deserializeAws_restJson1Metadata(data.RestoreMetadata, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetSupportedResourceTypesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetSupportedResourceTypesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            ResourceTypes: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.ResourceTypes !== undefined && data.ResourceTypes !== null) {
            contents.ResourceTypes = deserializeAws_restJson1ResourceTypes(data.ResourceTypes, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1GetSupportedResourceTypesCommandError = function (output, context) {
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
            case "ServiceUnavailableException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupJobs: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupJobs !== undefined && data.BackupJobs !== null) {
            contents.BackupJobs = deserializeAws_restJson1BackupJobsList(data.BackupJobs, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupJobsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupPlansCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupPlansCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlansList: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlansList !== undefined && data.BackupPlansList !== null) {
            contents.BackupPlansList = deserializeAws_restJson1BackupPlansList(data.BackupPlansList, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupPlansCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupPlanTemplatesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupPlanTemplatesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanTemplatesList: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanTemplatesList !== undefined && data.BackupPlanTemplatesList !== null) {
            contents.BackupPlanTemplatesList = deserializeAws_restJson1BackupPlanTemplatesList(
              data.BackupPlanTemplatesList,
              context
            );
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupPlanTemplatesCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupPlanVersionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupPlanVersionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupPlanVersionsList: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupPlanVersionsList !== undefined && data.BackupPlanVersionsList !== null) {
            contents.BackupPlanVersionsList = deserializeAws_restJson1BackupPlanVersionsList(
              data.BackupPlanVersionsList,
              context
            );
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupPlanVersionsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupSelectionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupSelectionsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupSelectionsList: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupSelectionsList !== undefined && data.BackupSelectionsList !== null) {
            contents.BackupSelectionsList = deserializeAws_restJson1BackupSelectionsList(
              data.BackupSelectionsList,
              context
            );
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupSelectionsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBackupVaultsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListBackupVaultsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultList: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultList !== undefined && data.BackupVaultList !== null) {
            contents.BackupVaultList = deserializeAws_restJson1BackupVaultList(data.BackupVaultList, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListBackupVaultsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListCopyJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListCopyJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CopyJobs: undefined,
            NextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.CopyJobs !== undefined && data.CopyJobs !== null) {
            contents.CopyJobs = deserializeAws_restJson1CopyJobsList(data.CopyJobs, context);
          }
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListCopyJobsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListProtectedResourcesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListProtectedResourcesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            Results: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.Results !== undefined && data.Results !== null) {
            contents.Results = deserializeAws_restJson1ProtectedResourcesList(data.Results, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListProtectedResourcesCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "ServiceUnavailableException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            RecoveryPoints: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
            contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByBackupVaultList(
              data.RecoveryPoints,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRecoveryPointsByResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListRecoveryPointsByResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            RecoveryPoints: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
            contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByResourceList(data.RecoveryPoints, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListRecoveryPointsByResourceCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRestoreJobsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListRestoreJobsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            RestoreJobs: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.RestoreJobs !== undefined && data.RestoreJobs !== null) {
            contents.RestoreJobs = deserializeAws_restJson1RestoreJobsList(data.RestoreJobs, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListRestoreJobsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTagsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            NextToken: undefined,
            Tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.NextToken !== undefined && data.NextToken !== null) {
            contents.NextToken = data.NextToken;
          }
          if (data.Tags !== undefined && data.Tags !== null) {
            contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutBackupVaultAccessPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError(output, context)];
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
var deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutBackupVaultNotificationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1PutBackupVaultNotificationsCommandError(output, context)];
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
var deserializeAws_restJson1PutBackupVaultNotificationsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartBackupJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartBackupJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupJobId: undefined,
            CreationDate: undefined,
            RecoveryPointArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
            contents.BackupJobId = data.BackupJobId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartBackupJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1StartCopyJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartCopyJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            CopyJobId: undefined,
            CreationDate: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.CopyJobId !== undefined && data.CopyJobId !== null) {
            contents.CopyJobId = data.CopyJobId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartCopyJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 6];
            case "MissingParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceUnavailableException":
              return [3 /*break*/, 12];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_restJson1StartRestoreJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartRestoreJobCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            RestoreJobId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
            contents.RestoreJobId = data.RestoreJobId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartRestoreJobCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopBackupJobCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StopBackupJobCommandError(output, context)];
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
var deserializeAws_restJson1StopBackupJobCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "LimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#LimitExceededException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ServiceUnavailableException":
              return [3 /*break*/, 10];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBackupPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateBackupPlanCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            AdvancedBackupSettings: undefined,
            BackupPlanArn: undefined,
            BackupPlanId: undefined,
            CreationDate: undefined,
            VersionId: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
            contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
              data.AdvancedBackupSettings,
              context
            );
          }
          if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
            contents.BackupPlanArn = data.BackupPlanArn;
          }
          if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
            contents.BackupPlanId = data.BackupPlanId;
          }
          if (data.CreationDate !== undefined && data.CreationDate !== null) {
            contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
          }
          if (data.VersionId !== undefined && data.VersionId !== null) {
            contents.VersionId = data.VersionId;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateBackupPlanCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateGlobalSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateGlobalSettingsCommandError(output, context)];
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
var deserializeAws_restJson1UpdateGlobalSettingsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#InvalidRequestException":
              return [3 /*break*/, 4];
            case "MissingParameterValueException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            BackupVaultArn: undefined,
            CalculatedLifecycle: undefined,
            Lifecycle: undefined,
            RecoveryPointArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
            contents.BackupVaultArn = data.BackupVaultArn;
          }
          if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
            contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(
              data.CalculatedLifecycle,
              context
            );
          }
          if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
            contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
          }
          if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
            contents.RecoveryPointArn = data.RecoveryPointArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceUnavailableException":
              return [3 /*break*/, 8];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRegionSettingsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateRegionSettingsCommandError(output, context)];
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
var deserializeAws_restJson1UpdateRegionSettingsCommandError = function (output, context) {
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
            case "InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "com.amazonaws.backup#InvalidParameterValueException":
              return [3 /*break*/, 2];
            case "MissingParameterValueException":
              return [3 /*break*/, 4];
            case "com.amazonaws.backup#MissingParameterValueException":
              return [3 /*break*/, 4];
            case "ServiceUnavailableException":
              return [3 /*break*/, 6];
            case "com.amazonaws.backup#ServiceUnavailableException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1AlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "AlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Arn: undefined,
        Code: undefined,
        Context: undefined,
        CreatorRequestId: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
      }
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
        contents.CreatorRequestId = data.CreatorRequestId;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1DependencyFailureExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "DependencyFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InvalidParameterValueExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InvalidResourceStateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InvalidResourceStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1MissingParameterValueExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "MissingParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
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
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Context: undefined,
        Message: undefined,
        Type: undefined,
      };
      data = parsedOutput.body;
      if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
      }
      if (data.Context !== undefined && data.Context !== null) {
        contents.Context = data.Context;
      }
      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }
      if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1AdvancedBackupSetting = function (input, context) {
  return __assign(
    __assign(
      {},
      input.BackupOptions !== undefined &&
        input.BackupOptions !== null && {
          BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
        }
    ),
    input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }
  );
};
var serializeAws_restJson1AdvancedBackupSettings = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};
var serializeAws_restJson1BackupOptions = function (input, context) {
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
var serializeAws_restJson1BackupPlanInput = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AdvancedBackupSettings !== undefined &&
          input.AdvancedBackupSettings !== null && {
            AdvancedBackupSettings: serializeAws_restJson1AdvancedBackupSettings(input.AdvancedBackupSettings, context),
          }
      ),
      input.BackupPlanName !== undefined && input.BackupPlanName !== null && { BackupPlanName: input.BackupPlanName }
    ),
    input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1BackupRulesInput(input.Rules, context) }
  );
};
var serializeAws_restJson1BackupRuleInput = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.CompletionWindowMinutes !== undefined &&
                      input.CompletionWindowMinutes !== null && {
                        CompletionWindowMinutes: input.CompletionWindowMinutes,
                      }
                  ),
                  input.CopyActions !== undefined &&
                    input.CopyActions !== null && {
                      CopyActions: serializeAws_restJson1CopyActions(input.CopyActions, context),
                    }
                ),
                input.EnableContinuousBackup !== undefined &&
                  input.EnableContinuousBackup !== null && { EnableContinuousBackup: input.EnableContinuousBackup }
              ),
              input.Lifecycle !== undefined &&
                input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }
            ),
            input.RecoveryPointTags !== undefined &&
              input.RecoveryPointTags !== null && {
                RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
              }
          ),
          input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }
        ),
        input.ScheduleExpression !== undefined &&
          input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }
      ),
      input.StartWindowMinutes !== undefined &&
        input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }
    ),
    input.TargetBackupVaultName !== undefined &&
      input.TargetBackupVaultName !== null && { TargetBackupVaultName: input.TargetBackupVaultName }
  );
};
var serializeAws_restJson1BackupRulesInput = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BackupRuleInput(entry, context);
    });
};
var serializeAws_restJson1BackupSelection = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
        input.ListOfTags !== undefined &&
          input.ListOfTags !== null && { ListOfTags: serializeAws_restJson1ListOfTags(input.ListOfTags, context) }
      ),
      input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_restJson1ResourceArns(input.Resources, context) }
    ),
    input.SelectionName !== undefined && input.SelectionName !== null && { SelectionName: input.SelectionName }
  );
};
var serializeAws_restJson1BackupVaultEvents = function (input, context) {
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
var serializeAws_restJson1Condition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ConditionKey !== undefined && input.ConditionKey !== null && { ConditionKey: input.ConditionKey }
      ),
      input.ConditionType !== undefined && input.ConditionType !== null && { ConditionType: input.ConditionType }
    ),
    input.ConditionValue !== undefined && input.ConditionValue !== null && { ConditionValue: input.ConditionValue }
  );
};
var serializeAws_restJson1CopyAction = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DestinationBackupVaultArn !== undefined &&
        input.DestinationBackupVaultArn !== null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }
    ),
    input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }
  );
};
var serializeAws_restJson1CopyActions = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CopyAction(entry, context);
    });
};
var serializeAws_restJson1GlobalSettings = function (input, context) {
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
var serializeAws_restJson1Lifecycle = function (input, context) {
  return __assign(
    __assign(
      {},
      input.DeleteAfterDays !== undefined &&
        input.DeleteAfterDays !== null && { DeleteAfterDays: input.DeleteAfterDays }
    ),
    input.MoveToColdStorageAfterDays !== undefined &&
      input.MoveToColdStorageAfterDays !== null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }
  );
};
var serializeAws_restJson1ListOfTags = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Condition(entry, context);
    });
};
var serializeAws_restJson1Metadata = function (input, context) {
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
var serializeAws_restJson1ResourceArns = function (input, context) {
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
var serializeAws_restJson1ResourceTypeOptInPreference = function (input, context) {
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
var serializeAws_restJson1TagKeyList = function (input, context) {
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
var serializeAws_restJson1Tags = function (input, context) {
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
var deserializeAws_restJson1AdvancedBackupSetting = function (output, context) {
  return {
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  };
};
var deserializeAws_restJson1AdvancedBackupSettings = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};
var deserializeAws_restJson1BackupJob = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupJobId: output.BackupJobId !== undefined && output.BackupJobId !== null ? output.BackupJobId : undefined,
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    BytesTransferred:
      output.BytesTransferred !== undefined && output.BytesTransferred !== null ? output.BytesTransferred : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionDate:
      output.ExpectedCompletionDate !== undefined && output.ExpectedCompletionDate !== null
        ? new Date(Math.round(output.ExpectedCompletionDate * 1000))
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    PercentDone: output.PercentDone !== undefined && output.PercentDone !== null ? output.PercentDone : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    StartBy:
      output.StartBy !== undefined && output.StartBy !== null ? new Date(Math.round(output.StartBy * 1000)) : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
var deserializeAws_restJson1BackupJobsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupJob(entry, context);
    });
};
var deserializeAws_restJson1BackupOptions = function (output, context) {
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
var deserializeAws_restJson1BackupPlan = function (output, context) {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName:
      output.BackupPlanName !== undefined && output.BackupPlanName !== null ? output.BackupPlanName : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1BackupRules(output.Rules, context)
        : undefined,
  };
};
var deserializeAws_restJson1BackupPlansList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};
var deserializeAws_restJson1BackupPlansListMember = function (output, context) {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanArn:
      output.BackupPlanArn !== undefined && output.BackupPlanArn !== null ? output.BackupPlanArn : undefined,
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    BackupPlanName:
      output.BackupPlanName !== undefined && output.BackupPlanName !== null ? output.BackupPlanName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    LastExecutionDate:
      output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
        ? new Date(Math.round(output.LastExecutionDate * 1000))
        : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  };
};
var deserializeAws_restJson1BackupPlanTemplatesList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlanTemplatesListMember(entry, context);
    });
};
var deserializeAws_restJson1BackupPlanTemplatesListMember = function (output, context) {
  return {
    BackupPlanTemplateId:
      output.BackupPlanTemplateId !== undefined && output.BackupPlanTemplateId !== null
        ? output.BackupPlanTemplateId
        : undefined,
    BackupPlanTemplateName:
      output.BackupPlanTemplateName !== undefined && output.BackupPlanTemplateName !== null
        ? output.BackupPlanTemplateName
        : undefined,
  };
};
var deserializeAws_restJson1BackupPlanVersionsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};
var deserializeAws_restJson1BackupRule = function (output, context) {
  return {
    CompletionWindowMinutes:
      output.CompletionWindowMinutes !== undefined && output.CompletionWindowMinutes !== null
        ? output.CompletionWindowMinutes
        : undefined,
    CopyActions:
      output.CopyActions !== undefined && output.CopyActions !== null
        ? deserializeAws_restJson1CopyActions(output.CopyActions, context)
        : undefined,
    EnableContinuousBackup:
      output.EnableContinuousBackup !== undefined && output.EnableContinuousBackup !== null
        ? output.EnableContinuousBackup
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointTags:
      output.RecoveryPointTags !== undefined && output.RecoveryPointTags !== null
        ? deserializeAws_restJson1Tags(output.RecoveryPointTags, context)
        : undefined,
    RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    StartWindowMinutes:
      output.StartWindowMinutes !== undefined && output.StartWindowMinutes !== null
        ? output.StartWindowMinutes
        : undefined,
    TargetBackupVaultName:
      output.TargetBackupVaultName !== undefined && output.TargetBackupVaultName !== null
        ? output.TargetBackupVaultName
        : undefined,
  };
};
var deserializeAws_restJson1BackupRules = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupRule(entry, context);
    });
};
var deserializeAws_restJson1BackupSelection = function (output, context) {
  return {
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    ListOfTags:
      output.ListOfTags !== undefined && output.ListOfTags !== null
        ? deserializeAws_restJson1ListOfTags(output.ListOfTags, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1ResourceArns(output.Resources, context)
        : undefined,
    SelectionName:
      output.SelectionName !== undefined && output.SelectionName !== null ? output.SelectionName : undefined,
  };
};
var deserializeAws_restJson1BackupSelectionsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupSelectionsListMember(entry, context);
    });
};
var deserializeAws_restJson1BackupSelectionsListMember = function (output, context) {
  return {
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    SelectionId: output.SelectionId !== undefined && output.SelectionId !== null ? output.SelectionId : undefined,
    SelectionName:
      output.SelectionName !== undefined && output.SelectionName !== null ? output.SelectionName : undefined,
  };
};
var deserializeAws_restJson1BackupVaultEvents = function (output, context) {
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
var deserializeAws_restJson1BackupVaultList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackupVaultListMember(entry, context);
    });
};
var deserializeAws_restJson1BackupVaultListMember = function (output, context) {
  return {
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    NumberOfRecoveryPoints:
      output.NumberOfRecoveryPoints !== undefined && output.NumberOfRecoveryPoints !== null
        ? output.NumberOfRecoveryPoints
        : undefined,
  };
};
var deserializeAws_restJson1CalculatedLifecycle = function (output, context) {
  return {
    DeleteAt:
      output.DeleteAt !== undefined && output.DeleteAt !== null
        ? new Date(Math.round(output.DeleteAt * 1000))
        : undefined,
    MoveToColdStorageAt:
      output.MoveToColdStorageAt !== undefined && output.MoveToColdStorageAt !== null
        ? new Date(Math.round(output.MoveToColdStorageAt * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1Condition = function (output, context) {
  return {
    ConditionKey: output.ConditionKey !== undefined && output.ConditionKey !== null ? output.ConditionKey : undefined,
    ConditionType:
      output.ConditionType !== undefined && output.ConditionType !== null ? output.ConditionType : undefined,
    ConditionValue:
      output.ConditionValue !== undefined && output.ConditionValue !== null ? output.ConditionValue : undefined,
  };
};
var deserializeAws_restJson1CopyAction = function (output, context) {
  return {
    DestinationBackupVaultArn:
      output.DestinationBackupVaultArn !== undefined && output.DestinationBackupVaultArn !== null
        ? output.DestinationBackupVaultArn
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
  };
};
var deserializeAws_restJson1CopyActions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CopyAction(entry, context);
    });
};
var deserializeAws_restJson1CopyJob = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CopyJobId: output.CopyJobId !== undefined && output.CopyJobId !== null ? output.CopyJobId : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    DestinationBackupVaultArn:
      output.DestinationBackupVaultArn !== undefined && output.DestinationBackupVaultArn !== null
        ? output.DestinationBackupVaultArn
        : undefined,
    DestinationRecoveryPointArn:
      output.DestinationRecoveryPointArn !== undefined && output.DestinationRecoveryPointArn !== null
        ? output.DestinationRecoveryPointArn
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    SourceBackupVaultArn:
      output.SourceBackupVaultArn !== undefined && output.SourceBackupVaultArn !== null
        ? output.SourceBackupVaultArn
        : undefined,
    SourceRecoveryPointArn:
      output.SourceRecoveryPointArn !== undefined && output.SourceRecoveryPointArn !== null
        ? output.SourceRecoveryPointArn
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
var deserializeAws_restJson1CopyJobsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CopyJob(entry, context);
    });
};
var deserializeAws_restJson1GlobalSettings = function (output, context) {
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
var deserializeAws_restJson1Lifecycle = function (output, context) {
  return {
    DeleteAfterDays:
      output.DeleteAfterDays !== undefined && output.DeleteAfterDays !== null ? output.DeleteAfterDays : undefined,
    MoveToColdStorageAfterDays:
      output.MoveToColdStorageAfterDays !== undefined && output.MoveToColdStorageAfterDays !== null
        ? output.MoveToColdStorageAfterDays
        : undefined,
  };
};
var deserializeAws_restJson1ListOfTags = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Condition(entry, context);
    });
};
var deserializeAws_restJson1Metadata = function (output, context) {
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
var deserializeAws_restJson1ProtectedResource = function (output, context) {
  return {
    LastBackupTime:
      output.LastBackupTime !== undefined && output.LastBackupTime !== null
        ? new Date(Math.round(output.LastBackupTime * 1000))
        : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
  };
};
var deserializeAws_restJson1ProtectedResourcesList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ProtectedResource(entry, context);
    });
};
var deserializeAws_restJson1RecoveryPointByBackupVault = function (output, context) {
  return {
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    BackupVaultArn:
      output.BackupVaultArn !== undefined && output.BackupVaultArn !== null ? output.BackupVaultArn : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CalculatedLifecycle:
      output.CalculatedLifecycle !== undefined && output.CalculatedLifecycle !== null
        ? deserializeAws_restJson1CalculatedLifecycle(output.CalculatedLifecycle, context)
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    IsEncrypted: output.IsEncrypted !== undefined && output.IsEncrypted !== null ? output.IsEncrypted : undefined,
    LastRestoreTime:
      output.LastRestoreTime !== undefined && output.LastRestoreTime !== null
        ? new Date(Math.round(output.LastRestoreTime * 1000))
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    SourceBackupVaultArn:
      output.SourceBackupVaultArn !== undefined && output.SourceBackupVaultArn !== null
        ? output.SourceBackupVaultArn
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
var deserializeAws_restJson1RecoveryPointByBackupVaultList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RecoveryPointByBackupVault(entry, context);
    });
};
var deserializeAws_restJson1RecoveryPointByResource = function (output, context) {
  return {
    BackupSizeBytes:
      output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
    BackupVaultName:
      output.BackupVaultName !== undefined && output.BackupVaultName !== null ? output.BackupVaultName : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn:
      output.EncryptionKeyArn !== undefined && output.EncryptionKeyArn !== null ? output.EncryptionKeyArn : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
var deserializeAws_restJson1RecoveryPointByResourceList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RecoveryPointByResource(entry, context);
    });
};
var deserializeAws_restJson1RecoveryPointCreator = function (output, context) {
  return {
    BackupPlanArn:
      output.BackupPlanArn !== undefined && output.BackupPlanArn !== null ? output.BackupPlanArn : undefined,
    BackupPlanId: output.BackupPlanId !== undefined && output.BackupPlanId !== null ? output.BackupPlanId : undefined,
    BackupPlanVersion:
      output.BackupPlanVersion !== undefined && output.BackupPlanVersion !== null
        ? output.BackupPlanVersion
        : undefined,
    BackupRuleId: output.BackupRuleId !== undefined && output.BackupRuleId !== null ? output.BackupRuleId : undefined,
  };
};
var deserializeAws_restJson1ResourceArns = function (output, context) {
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
var deserializeAws_restJson1ResourceTypeOptInPreference = function (output, context) {
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
var deserializeAws_restJson1ResourceTypes = function (output, context) {
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
var deserializeAws_restJson1RestoreJobsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RestoreJobsListMember(entry, context);
    });
};
var deserializeAws_restJson1RestoreJobsListMember = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BackupSizeInBytes:
      output.BackupSizeInBytes !== undefined && output.BackupSizeInBytes !== null
        ? output.BackupSizeInBytes
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedResourceArn:
      output.CreatedResourceArn !== undefined && output.CreatedResourceArn !== null
        ? output.CreatedResourceArn
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionTimeMinutes:
      output.ExpectedCompletionTimeMinutes !== undefined && output.ExpectedCompletionTimeMinutes !== null
        ? output.ExpectedCompletionTimeMinutes
        : undefined,
    IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    PercentDone: output.PercentDone !== undefined && output.PercentDone !== null ? output.PercentDone : undefined,
    RecoveryPointArn:
      output.RecoveryPointArn !== undefined && output.RecoveryPointArn !== null ? output.RecoveryPointArn : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    RestoreJobId: output.RestoreJobId !== undefined && output.RestoreJobId !== null ? output.RestoreJobId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
};
var deserializeAws_restJson1Tags = function (output, context) {
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
