import { __extends } from "tslib";
import { PostToConnectionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PostToConnectionCommand,
  serializeAws_restJson1PostToConnectionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends the provided data to the specified connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, PostToConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * const client = new ApiGatewayManagementApiClient(config);
 * const command = new PostToConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostToConnectionCommandInput} for command's `input` shape.
 * @see {@link PostToConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PostToConnectionCommand = /** @class */ (function (_super) {
  __extends(PostToConnectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PostToConnectionCommand(input) {
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
  PostToConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayManagementApiClient";
    var commandName = "PostToConnectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PostToConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PostToConnectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PostToConnectionCommand(input, context);
  };
  PostToConnectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PostToConnectionCommand(output, context);
  };
  return PostToConnectionCommand;
})($Command);
export { PostToConnectionCommand };
//# sourceMappingURL=PostToConnectionCommand.js.map
