import { __extends } from "tslib";
import { AttachToIndexRequest, AttachToIndexResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachToIndexCommand,
  serializeAws_restJson1AttachToIndexCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified object to the specified index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachToIndexCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachToIndexCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new AttachToIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachToIndexCommandInput} for command's `input` shape.
 * @see {@link AttachToIndexCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachToIndexCommand = /** @class */ (function (_super) {
  __extends(AttachToIndexCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachToIndexCommand(input) {
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
  AttachToIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "AttachToIndexCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachToIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachToIndexResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachToIndexCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AttachToIndexCommand(input, context);
  };
  AttachToIndexCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AttachToIndexCommand(output, context);
  };
  return AttachToIndexCommand;
})($Command);
export { AttachToIndexCommand };
//# sourceMappingURL=AttachToIndexCommand.js.map
