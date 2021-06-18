import { __extends } from "tslib";
import { GetSchemaAsJsonRequest, GetSchemaAsJsonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSchemaAsJsonCommand,
  serializeAws_restJson1GetSchemaAsJsonCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetSchemaAsJsonCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetSchemaAsJsonCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetSchemaAsJsonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaAsJsonCommandInput} for command's `input` shape.
 * @see {@link GetSchemaAsJsonCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSchemaAsJsonCommand = /** @class */ (function (_super) {
  __extends(GetSchemaAsJsonCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSchemaAsJsonCommand(input) {
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
  GetSchemaAsJsonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetSchemaAsJsonCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSchemaAsJsonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSchemaAsJsonResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSchemaAsJsonCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSchemaAsJsonCommand(input, context);
  };
  GetSchemaAsJsonCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSchemaAsJsonCommand(output, context);
  };
  return GetSchemaAsJsonCommand;
})($Command);
export { GetSchemaAsJsonCommand };
//# sourceMappingURL=GetSchemaAsJsonCommand.js.map
