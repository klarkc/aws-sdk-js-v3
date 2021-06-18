import { __extends } from "tslib";
import { CreateControlRequest, CreateControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateControlCommand,
  serializeAws_restJson1CreateControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Creates a new custom control in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new CreateControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateControlCommandInput} for command's `input` shape.
 * @see {@link CreateControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateControlCommand = /** @class */ (function (_super) {
  __extends(CreateControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateControlCommand(input) {
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
  CreateControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "CreateControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateControlCommand(input, context);
  };
  CreateControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateControlCommand(output, context);
  };
  return CreateControlCommand;
})($Command);
export { CreateControlCommand };
//# sourceMappingURL=CreateControlCommand.js.map
