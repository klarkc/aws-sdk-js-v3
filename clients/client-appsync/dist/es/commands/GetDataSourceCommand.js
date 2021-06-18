import { __extends } from "tslib";
import { GetDataSourceRequest, GetDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDataSourceCommand,
  serializeAws_restJson1GetDataSourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a <code>DataSource</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetDataSourceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetDataSourceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataSourceCommand = /** @class */ (function (_super) {
  __extends(GetDataSourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDataSourceCommand(input) {
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
  GetDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetDataSourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataSourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDataSourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDataSourceCommand(input, context);
  };
  GetDataSourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDataSourceCommand(output, context);
  };
  return GetDataSourceCommand;
})($Command);
export { GetDataSourceCommand };
//# sourceMappingURL=GetDataSourceCommand.js.map
