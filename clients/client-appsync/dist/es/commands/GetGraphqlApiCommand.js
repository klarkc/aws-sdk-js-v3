import { __extends } from "tslib";
import { GetGraphqlApiRequest, GetGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetGraphqlApiCommand,
  serializeAws_restJson1GetGraphqlApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link GetGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGraphqlApiCommand = /** @class */ (function (_super) {
  __extends(GetGraphqlApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGraphqlApiCommand(input) {
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
  GetGraphqlApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetGraphqlApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGraphqlApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGraphqlApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGraphqlApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetGraphqlApiCommand(input, context);
  };
  GetGraphqlApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetGraphqlApiCommand(output, context);
  };
  return GetGraphqlApiCommand;
})($Command);
export { GetGraphqlApiCommand };
//# sourceMappingURL=GetGraphqlApiCommand.js.map
