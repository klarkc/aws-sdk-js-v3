import { __extends } from "tslib";
import { UpdateGraphqlApiRequest, UpdateGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGraphqlApiCommand,
  serializeAws_restJson1UpdateGraphqlApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link UpdateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGraphqlApiCommand = /** @class */ (function (_super) {
  __extends(UpdateGraphqlApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGraphqlApiCommand(input) {
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
  UpdateGraphqlApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateGraphqlApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGraphqlApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGraphqlApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGraphqlApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateGraphqlApiCommand(input, context);
  };
  UpdateGraphqlApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateGraphqlApiCommand(output, context);
  };
  return UpdateGraphqlApiCommand;
})($Command);
export { UpdateGraphqlApiCommand };
//# sourceMappingURL=UpdateGraphqlApiCommand.js.map
