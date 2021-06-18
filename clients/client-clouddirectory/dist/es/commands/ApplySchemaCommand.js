import { __extends } from "tslib";
import { ApplySchemaRequest, ApplySchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ApplySchemaCommand,
  serializeAws_restJson1ApplySchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the input published schema, at the specified version, into the <a>Directory</a> with the same
 *       name and version as that of the published schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ApplySchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ApplySchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ApplySchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplySchemaCommandInput} for command's `input` shape.
 * @see {@link ApplySchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplySchemaCommand = /** @class */ (function (_super) {
  __extends(ApplySchemaCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ApplySchemaCommand(input) {
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
  ApplySchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ApplySchemaCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ApplySchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApplySchemaResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ApplySchemaCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ApplySchemaCommand(input, context);
  };
  ApplySchemaCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ApplySchemaCommand(output, context);
  };
  return ApplySchemaCommand;
})($Command);
export { ApplySchemaCommand };
//# sourceMappingURL=ApplySchemaCommand.js.map
