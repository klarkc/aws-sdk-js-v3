import { __extends } from "tslib";
import { ACMPCAClient } from "./ACMPCAClient";
import { CreateCertificateAuthorityAuditReportCommand } from "./commands/CreateCertificateAuthorityAuditReportCommand";
import { CreateCertificateAuthorityCommand } from "./commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommand } from "./commands/CreatePermissionCommand";
import { DeleteCertificateAuthorityCommand } from "./commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommand } from "./commands/DeletePermissionCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DescribeCertificateAuthorityAuditReportCommand } from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import { DescribeCertificateAuthorityCommand } from "./commands/DescribeCertificateAuthorityCommand";
import { GetCertificateAuthorityCertificateCommand } from "./commands/GetCertificateAuthorityCertificateCommand";
import { GetCertificateAuthorityCsrCommand } from "./commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommand } from "./commands/GetCertificateCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { ImportCertificateAuthorityCertificateCommand } from "./commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommand } from "./commands/IssueCertificateCommand";
import { ListCertificateAuthoritiesCommand } from "./commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommand } from "./commands/ListPermissionsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PutPolicyCommand } from "./commands/PutPolicyCommand";
import { RestoreCertificateAuthorityCommand } from "./commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommand } from "./commands/RevokeCertificateCommand";
import { TagCertificateAuthorityCommand } from "./commands/TagCertificateAuthorityCommand";
import { UntagCertificateAuthorityCommand } from "./commands/UntagCertificateAuthorityCommand";
import { UpdateCertificateAuthorityCommand } from "./commands/UpdateCertificateAuthorityCommand";
/**
 * <p>This is the <i>ACM Private CA API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing private certificate authorities (CA) for your organization.</p>
 * 		       <p>The documentation for each action shows the Query API request parameters and the XML
 * 			response. Alternatively, you can use one of the AWS SDKs to access an API that's
 * 			tailored to the programming language or platform that you're using. For more
 * 			information, see <a href="https://aws.amazon.com/tools/#SDKs">AWS
 * 			SDKs</a>.</p>
 * 		       <note>
 * 			         <p>Each ACM Private CA API action has a quota that determines the number of times the action
 * 				can be called per second. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaLimits.html#PcaLimits-api">API Rate Quotas in ACM Private CA</a>
 * 				in the ACM Private CA user guide.</p>
 * 		       </note>
 */
var ACMPCA = /** @class */ (function (_super) {
  __extends(ACMPCA, _super);
  function ACMPCA() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ACMPCA.prototype.createCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new CreateCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.createCertificateAuthorityAuditReport = function (args, optionsOrCb, cb) {
    var command = new CreateCertificateAuthorityAuditReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.createPermission = function (args, optionsOrCb, cb) {
    var command = new CreatePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.deleteCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new DeleteCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.deletePermission = function (args, optionsOrCb, cb) {
    var command = new DeletePermissionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.deletePolicy = function (args, optionsOrCb, cb) {
    var command = new DeletePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.describeCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new DescribeCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.describeCertificateAuthorityAuditReport = function (args, optionsOrCb, cb) {
    var command = new DescribeCertificateAuthorityAuditReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.getCertificate = function (args, optionsOrCb, cb) {
    var command = new GetCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.getCertificateAuthorityCertificate = function (args, optionsOrCb, cb) {
    var command = new GetCertificateAuthorityCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.getCertificateAuthorityCsr = function (args, optionsOrCb, cb) {
    var command = new GetCertificateAuthorityCsrCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.getPolicy = function (args, optionsOrCb, cb) {
    var command = new GetPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.importCertificateAuthorityCertificate = function (args, optionsOrCb, cb) {
    var command = new ImportCertificateAuthorityCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.issueCertificate = function (args, optionsOrCb, cb) {
    var command = new IssueCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.listCertificateAuthorities = function (args, optionsOrCb, cb) {
    var command = new ListCertificateAuthoritiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.listPermissions = function (args, optionsOrCb, cb) {
    var command = new ListPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.listTags = function (args, optionsOrCb, cb) {
    var command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.putPolicy = function (args, optionsOrCb, cb) {
    var command = new PutPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.restoreCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new RestoreCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.revokeCertificate = function (args, optionsOrCb, cb) {
    var command = new RevokeCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.tagCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new TagCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.untagCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new UntagCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACMPCA.prototype.updateCertificateAuthority = function (args, optionsOrCb, cb) {
    var command = new UpdateCertificateAuthorityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return ACMPCA;
})(ACMPCAClient);
export { ACMPCA };
//# sourceMappingURL=ACMPCA.js.map
