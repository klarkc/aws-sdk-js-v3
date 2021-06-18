import { __extends } from "tslib";
import { PutSchemaFromJsonRequest, PutSchemaFromJsonResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutSchemaFromJsonCommand,
  serializeAws_restJson1PutSchemaFromJsonCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, PutSchemaFromJsonCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, PutSchemaFromJsonCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new PutSchemaFromJsonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSchemaFromJsonCommandInput} for command's `input` shape.
 * @see {@link PutSchemaFromJsonCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSchemaFromJsonCommand = /** @class */ (function (_super) {
  __extends(PutSchemaFromJsonCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutSchemaFromJsonCommand(input) {
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
  PutSchemaFromJsonCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "PutSchemaFromJsonCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutSchemaFromJsonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSchemaFromJsonResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutSchemaFromJsonCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutSchemaFromJsonCommand(input, context);
  };
  PutSchemaFromJsonCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutSchemaFromJsonCommand(output, context);
  };
  return PutSchemaFromJsonCommand;
})($Command);
export { PutSchemaFromJsonCommand };
//# sourceMappingURL=PutSchemaFromJsonCommand.js.map
