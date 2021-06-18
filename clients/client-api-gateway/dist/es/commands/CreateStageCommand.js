import { __extends } from "tslib";
import { CreateStageRequest, Stage } from "../models/models_0";
import {
  deserializeAws_restJson1CreateStageCommand,
  serializeAws_restJson1CreateStageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. </p>
 *         <!--   <p>Creates a <a>Stage</a> resource.</p>  -->
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateStageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateStageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateStageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStageCommandInput} for command's `input` shape.
 * @see {@link CreateStageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStageCommand = /** @class */ (function (_super) {
  __extends(CreateStageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStageCommand(input) {
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
  CreateStageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateStageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Stage.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateStageCommand(input, context);
  };
  CreateStageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateStageCommand(output, context);
  };
  return CreateStageCommand;
})($Command);
export { CreateStageCommand };
//# sourceMappingURL=CreateStageCommand.js.map
