import { __extends } from "tslib";
import { CreateGraphqlApiRequest, CreateGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGraphqlApiCommand,
  serializeAws_restJson1CreateGraphqlApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link CreateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGraphqlApiCommand = /** @class */ (function (_super) {
  __extends(CreateGraphqlApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateGraphqlApiCommand(input) {
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
  CreateGraphqlApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "CreateGraphqlApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateGraphqlApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGraphqlApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateGraphqlApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateGraphqlApiCommand(input, context);
  };
  CreateGraphqlApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateGraphqlApiCommand(output, context);
  };
  return CreateGraphqlApiCommand;
})($Command);
export { CreateGraphqlApiCommand };
//# sourceMappingURL=CreateGraphqlApiCommand.js.map
