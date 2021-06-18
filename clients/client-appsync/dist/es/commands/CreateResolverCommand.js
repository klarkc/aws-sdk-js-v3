import { __extends } from "tslib";
import { CreateResolverRequest, CreateResolverResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResolverCommand,
  serializeAws_restJson1CreateResolverCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>Resolver</code> object.</p>
 *          <p>A resolver converts incoming requests into a format that a data source can understand
 *          and converts the data source's responses into GraphQL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateResolverCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateResolverCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateResolverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverCommandInput} for command's `input` shape.
 * @see {@link CreateResolverCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResolverCommand = /** @class */ (function (_super) {
  __extends(CreateResolverCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateResolverCommand(input) {
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
  CreateResolverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "CreateResolverCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateResolverRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResolverResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateResolverCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateResolverCommand(input, context);
  };
  CreateResolverCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateResolverCommand(output, context);
  };
  return CreateResolverCommand;
})($Command);
export { CreateResolverCommand };
//# sourceMappingURL=CreateResolverCommand.js.map
