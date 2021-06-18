import { __extends } from "tslib";
import { GetAppliedSchemaVersionRequest, GetAppliedSchemaVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAppliedSchemaVersionCommand,
  serializeAws_restJson1GetAppliedSchemaVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns current applied schema version ARN, including the minor version in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetAppliedSchemaVersionCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetAppliedSchemaVersionCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetAppliedSchemaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppliedSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link GetAppliedSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppliedSchemaVersionCommand = /** @class */ (function (_super) {
  __extends(GetAppliedSchemaVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAppliedSchemaVersionCommand(input) {
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
  GetAppliedSchemaVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetAppliedSchemaVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAppliedSchemaVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppliedSchemaVersionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAppliedSchemaVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAppliedSchemaVersionCommand(input, context);
  };
  GetAppliedSchemaVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAppliedSchemaVersionCommand(output, context);
  };
  return GetAppliedSchemaVersionCommand;
})($Command);
export { GetAppliedSchemaVersionCommand };
//# sourceMappingURL=GetAppliedSchemaVersionCommand.js.map
