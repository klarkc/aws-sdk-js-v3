import { __extends } from "tslib";
import { ListAttachedIndicesRequest, ListAttachedIndicesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAttachedIndicesCommand,
  serializeAws_restJson1ListAttachedIndicesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists indices attached to the specified object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAttachedIndicesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListAttachedIndicesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListAttachedIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedIndicesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedIndicesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAttachedIndicesCommand = /** @class */ (function (_super) {
  __extends(ListAttachedIndicesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAttachedIndicesCommand(input) {
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
  ListAttachedIndicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListAttachedIndicesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAttachedIndicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttachedIndicesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAttachedIndicesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAttachedIndicesCommand(input, context);
  };
  ListAttachedIndicesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAttachedIndicesCommand(output, context);
  };
  return ListAttachedIndicesCommand;
})($Command);
export { ListAttachedIndicesCommand };
//# sourceMappingURL=ListAttachedIndicesCommand.js.map
