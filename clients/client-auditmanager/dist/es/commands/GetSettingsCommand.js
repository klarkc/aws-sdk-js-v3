import { __extends } from "tslib";
import { GetSettingsRequest, GetSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSettingsCommand,
  serializeAws_restJson1GetSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns the settings for the specified AWS account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSettingsCommandInput} for command's `input` shape.
 * @see {@link GetSettingsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSettingsCommand = /** @class */ (function (_super) {
  __extends(GetSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSettingsCommand(input) {
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
  GetSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSettingsCommand(input, context);
  };
  GetSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSettingsCommand(output, context);
  };
  return GetSettingsCommand;
})($Command);
export { GetSettingsCommand };
//# sourceMappingURL=GetSettingsCommand.js.map
