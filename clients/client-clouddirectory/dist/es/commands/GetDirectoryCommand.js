import { __extends } from "tslib";
import { GetDirectoryRequest, GetDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDirectoryCommand,
  serializeAws_restJson1GetDirectoryCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata about a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDirectoryCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDirectoryCommand = /** @class */ (function (_super) {
  __extends(GetDirectoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDirectoryCommand(input) {
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
  GetDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "GetDirectoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDirectoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDirectoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDirectoryCommand(input, context);
  };
  GetDirectoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDirectoryCommand(output, context);
  };
  return GetDirectoryCommand;
})($Command);
export { GetDirectoryCommand };
//# sourceMappingURL=GetDirectoryCommand.js.map
