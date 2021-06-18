import { __extends } from "tslib";
import { GetSupportedResourceTypesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetSupportedResourceTypesCommand,
  serializeAws_restJson1GetSupportedResourceTypesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the AWS resource types supported by AWS Backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetSupportedResourceTypesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetSupportedResourceTypesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetSupportedResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSupportedResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetSupportedResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSupportedResourceTypesCommand = /** @class */ (function (_super) {
  __extends(GetSupportedResourceTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSupportedResourceTypesCommand(input) {
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
  GetSupportedResourceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BackupClient";
    var commandName = "GetSupportedResourceTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: GetSupportedResourceTypesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSupportedResourceTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSupportedResourceTypesCommand(input, context);
  };
  GetSupportedResourceTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSupportedResourceTypesCommand(output, context);
  };
  return GetSupportedResourceTypesCommand;
})($Command);
export { GetSupportedResourceTypesCommand };
//# sourceMappingURL=GetSupportedResourceTypesCommand.js.map
