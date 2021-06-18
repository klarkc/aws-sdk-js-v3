import { __extends } from "tslib";
import { PublishSchemaRequest, PublishSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PublishSchemaCommand,
  serializeAws_restJson1PublishSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Publishes a development schema with a major version and a recommended minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, PublishSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, PublishSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new PublishSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishSchemaCommandInput} for command's `input` shape.
 * @see {@link PublishSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishSchemaCommand = /** @class */ (function (_super) {
  __extends(PublishSchemaCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PublishSchemaCommand(input) {
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
  PublishSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "PublishSchemaCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PublishSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PublishSchemaResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PublishSchemaCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PublishSchemaCommand(input, context);
  };
  PublishSchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PublishSchemaCommand(output, context);
  };
  return PublishSchemaCommand;
})($Command);
export { PublishSchemaCommand };
//# sourceMappingURL=PublishSchemaCommand.js.map
