import { __extends } from "tslib";
import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDataSourceCommand,
  serializeAws_restJson1UpdateDataSourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a <code>DataSource</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateDataSourceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateDataSourceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSourceCommand = /** @class */ (function (_super) {
  __extends(UpdateDataSourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDataSourceCommand(input) {
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
  UpdateDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "UpdateDataSourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDataSourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDataSourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateDataSourceCommand(input, context);
  };
  UpdateDataSourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateDataSourceCommand(output, context);
  };
  return UpdateDataSourceCommand;
})($Command);
export { UpdateDataSourceCommand };
//# sourceMappingURL=UpdateDataSourceCommand.js.map
