import { __extends } from "tslib";
import { AssociateCustomDomainRequest, AssociateCustomDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_0AssociateCustomDomainCommand,
  serializeAws_json1_0AssociateCustomDomainCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p>
 *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
 *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
 *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
 *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, AssociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, AssociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new AssociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateCustomDomainCommand = /** @class */ (function (_super) {
  __extends(AssociateCustomDomainCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateCustomDomainCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  AssociateCustomDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "AssociateCustomDomainCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateCustomDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateCustomDomainResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateCustomDomainCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0AssociateCustomDomainCommand(input, context);
  };
  AssociateCustomDomainCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0AssociateCustomDomainCommand(output, context);
  };
  return AssociateCustomDomainCommand;
})($Command);
export { AssociateCustomDomainCommand };
//# sourceMappingURL=AssociateCustomDomainCommand.js.map
