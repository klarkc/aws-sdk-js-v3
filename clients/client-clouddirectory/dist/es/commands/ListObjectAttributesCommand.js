import { __extends } from "tslib";
import { ListObjectAttributesRequest, ListObjectAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListObjectAttributesCommand,
  serializeAws_restJson1ListObjectAttributesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all attributes that are associated with an object.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link ListObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListObjectAttributesCommand = /** @class */ (function (_super) {
  __extends(ListObjectAttributesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListObjectAttributesCommand(input) {
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
  ListObjectAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListObjectAttributesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListObjectAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectAttributesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListObjectAttributesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListObjectAttributesCommand(input, context);
  };
  ListObjectAttributesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListObjectAttributesCommand(output, context);
  };
  return ListObjectAttributesCommand;
})($Command);
export { ListObjectAttributesCommand };
//# sourceMappingURL=ListObjectAttributesCommand.js.map
