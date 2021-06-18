import { __extends } from "tslib";
import { GetResolverRequest, GetResolverResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetResolverCommand,
  serializeAws_restJson1GetResolverCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a <code>Resolver</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetResolverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResolverCommandInput} for command's `input` shape.
 * @see {@link GetResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResolverCommand = /** @class */ (function (_super) {
  __extends(GetResolverCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetResolverCommand(input) {
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
  GetResolverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetResolverCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetResolverRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetResolverCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetResolverCommand(input, context);
  };
  GetResolverCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetResolverCommand(output, context);
  };
  return GetResolverCommand;
})($Command);
export { GetResolverCommand };
//# sourceMappingURL=GetResolverCommand.js.map
