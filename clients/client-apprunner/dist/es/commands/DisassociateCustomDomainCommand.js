import { __extends } from "tslib";
import { DisassociateCustomDomainRequest, DisassociateCustomDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DisassociateCustomDomainCommand,
  serializeAws_json1_0DisassociateCustomDomainCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociate a custom domain name from an AWS App Runner service.</p>
 *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
 *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 *       30 days after a domain is disassociated from your service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DisassociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DisassociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DisassociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateCustomDomainCommand = /** @class */ (function (_super) {
  __extends(DisassociateCustomDomainCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateCustomDomainCommand(input) {
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
  DisassociateCustomDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DisassociateCustomDomainCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateCustomDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateCustomDomainResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateCustomDomainCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DisassociateCustomDomainCommand(input, context);
  };
  DisassociateCustomDomainCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DisassociateCustomDomainCommand(output, context);
  };
  return DisassociateCustomDomainCommand;
})($Command);
export { DisassociateCustomDomainCommand };
//# sourceMappingURL=DisassociateCustomDomainCommand.js.map
